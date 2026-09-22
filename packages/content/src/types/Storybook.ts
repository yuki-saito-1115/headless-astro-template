import type { SlotValue } from '@storybook-astro/renderer/types';

export type StoryArgs<Props> = Props & {
  slots?: Record<string, SlotValue>;
};
