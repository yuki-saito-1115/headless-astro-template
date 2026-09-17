# headless-astro-template

Monorepo template for Headless CMS projects using Astro and Cloudflare Workers.

## Structure

```text
apps/
  main/      # Astro app / Worker
  staging/   # Astro app / Worker
  preview/   # Astro app / Worker
packages/
  content/   # shared content/client layer placeholder
  ui/        # shared Astro components, layouts, styles, and scripts
```

Each app currently uses the same static Astro setup. Every Worker has its own `wrangler.jsonc`, and Cloudflare Workers Builds should point each Worker root directory to the corresponding `apps/*` directory. There are no environment-specific differences at this stage.

## Commands

```sh
npm install
npm run build
npm run dev:main
npm run dev:staging
npm run dev:preview
```

## Cloudflare Workers Builds

Connect the same Git repository to each Cloudflare Worker, then configure each Worker as follows.

| Worker | Root directory | Build command | Deploy command |
| --- | --- | --- | --- |
| main | `/apps/main` | `npm run build` | `npx wrangler deploy` |
| staging | `/apps/staging` | `npm run build` | `npx wrangler deploy` |
| preview | `/apps/preview` | `npm run build` | `npx wrangler deploy` |

Build watch paths should include the target app and shared packages.

| Worker | Build watch paths |
| --- | --- |
| main | `apps/main/**`, `packages/**` |
| staging | `apps/staging/**`, `packages/**` |
| preview | `apps/preview/**`, `packages/**` |

This setup manages environment differences as multiple Workers on a single branch instead of branch-specific diffs.
