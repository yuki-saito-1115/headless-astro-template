import { watch } from "node:fs";
import { cp, lstat, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const sharedAssetsDir = join(rootDir, "packages", "asset", "src");
const watchMode = process.argv.includes("--watch");
const applicationNames = process.argv.slice(2).filter((argument) => argument !== "--watch");

if (applicationNames.length === 0) {
  applicationNames.push("site", "preview");
}

async function exists(path) {
  try {
    await lstat(path);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function copyDirectory(sourceDir, destinationDir, applicationPublicDir) {
  for (const entry of await readdir(sourceDir, { withFileTypes: true })) {
    if (entry.name === ".gitkeep") continue;

    const sourcePath = join(sourceDir, entry.name);
    const destinationPath = join(destinationDir, entry.name);
    const applicationPath = join(applicationPublicDir, relative(sharedAssetsDir, sourcePath));

    if (await exists(applicationPath)) {
      console.warn(`Warning: ${relative(rootDir, applicationPath)} overrides shared asset.`);
      continue;
    }

    if (entry.isDirectory()) {
      await mkdir(destinationPath, { recursive: true });
      await copyDirectory(sourcePath, destinationPath, applicationPublicDir);
    } else {
      await mkdir(dirname(destinationPath), { recursive: true });
      await cp(sourcePath, destinationPath);
    }
  }
}

async function prepareApplication(applicationName) {
  const applicationDir = join(rootDir, "apps", applicationName);
  const applicationPublicDir = join(applicationDir, "public");
  const generatedPublicDir = join(applicationDir, ".generated-public");

  if (!(await exists(applicationDir))) {
    throw new Error(`Unknown application workspace: ${applicationName}`);
  }

  await rm(generatedPublicDir, { force: true, recursive: true });
  await mkdir(generatedPublicDir, { recursive: true });

  if (await exists(sharedAssetsDir)) {
    await copyDirectory(sharedAssetsDir, generatedPublicDir, applicationPublicDir);
  }

  if (await exists(applicationPublicDir)) {
    await cp(applicationPublicDir, generatedPublicDir, { recursive: true });
  }
}

async function prepareAssets() {
  await Promise.all(applicationNames.map(prepareApplication));
}

await prepareAssets();

if (watchMode) {
  let timer;
  let preparing = false;
  let pending = false;

  const schedulePrepare = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      if (preparing) {
        pending = true;
        return;
      }

      preparing = true;
      try {
        await prepareAssets();
        console.log("Updated generated public assets.");
      } catch (error) {
        console.error(error);
      } finally {
        preparing = false;
        if (pending) {
          pending = false;
          schedulePrepare();
        }
      }
    }, 100);
  };

  const watchDirectories = [sharedAssetsDir];
  for (const applicationName of applicationNames) {
    watchDirectories.push(join(rootDir, "apps", applicationName, "public"));
  }

  for (const directory of watchDirectories) {
    if (await exists(directory)) {
      watch(directory, { recursive: true }, schedulePrepare);
    }
  }

  console.log("Watching public asset sources.");
}
