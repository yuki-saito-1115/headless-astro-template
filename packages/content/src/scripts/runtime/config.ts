const focusableElement = `[href], input:not([type="hidden"]), select, textarea, button, iframe, object, embed, video, audio, summary, [tabindex]:not([tabindex="-1"])`;

const mediaQueries = (() => {
  const root = getComputedStyle(document.documentElement);
  const breakpoint = (name: string) => root.getPropertyValue(`--breakpoint-${name}`).trim();

  return {
    get major() {
      return window.matchMedia(`(width >= ${breakpoint('md')})`);
    },
    get minor() {
      return window.matchMedia(`(width >= ${breakpoint('lg')})`);
    },
  };
})();

export { focusableElement, mediaQueries };
