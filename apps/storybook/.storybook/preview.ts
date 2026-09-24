import '@packages/content/styles/tailwind.css';

const uiComponentImportPattern = /from '\.\/([^/]+)\.astro';/;

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        transform(
          code: string,
          context: { component?: { moduleId?: string } },
        ) {
          const componentId = context.component?.moduleId?.replace(/\\/g, '/');
          const modulePath = '/packages/ui/src/modules/';
          const moduleIndex = componentId?.indexOf(modulePath);

          if (moduleIndex === undefined || moduleIndex < 0) {
            return code;
          }

          const importPath = componentId.slice(moduleIndex + modulePath.length);

          return code.replace(
            uiComponentImportPattern,
            `from '@packages/ui/modules/${importPath}';`,
          );
        },
      },
    },
  },
};

export default preview;
