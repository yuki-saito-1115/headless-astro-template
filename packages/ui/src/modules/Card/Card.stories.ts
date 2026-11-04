import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props as CardPropType } from '@packages/ui/modules/Card/Card.astro';
import Card from '@packages/ui/modules/Card/Card.astro';
import Media from '@packages/ui/modules/Media/Media.astro';
import Text from '@packages/ui/modules/Text/Text.astro';

const meta = {
  component: Card,
  title: 'Components/Card/Card',
} satisfies Meta<StoryArgs<CardPropType>>;

export default meta;
type Story = StoryObj<StoryArgs<CardPropType>>;

export const Default: Story = {
  args: {
    date: '2026-09-25 08:30',
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
    title: 'タイトルタイトルタイトル',
  },
};

export const Headless: Story = {
  args: {
    date: '2026-09-25 08:30',
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
  },
};

export const Outline: Story = {
  args: {
    date: '2026-09-25 08:30',
    outline: true,
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
  },
};

export const Link: Story = {
  args: {
    date: '2026-09-25 08:30',
    link: {
      href: '#',
    },
    outline: true,
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
    title: 'タイトルタイトルタイトル',
  },
};

export const DirectColumnReverse: Story = {
  args: {
    date: '2026-09-25 08:30',
    directPc: 'column-reverse',
    directSp: 'column-reverse',
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
  },
};

export const DirectRow: Story = {
  args: {
    date: '2026-09-25 08:30',
    directPc: 'row',
    directSp: 'row',
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
  },
};

export const DirectRowReverse: Story = {
  args: {
    date: '2026-09-25 08:30',
    directPc: 'row-reverse',
    directSp: 'row-reverse',
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
  },
};

export const ThemeCaution: Story = {
  args: {
    date: '2026-09-25 08:30',
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
    theme: 'caution',
  },
};

export const ThemeWarning: Story = {
  args: {
    date: '2026-09-25 08:30',
    slots: {
      content: {
        component: Text,
        slots: {
          default:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>',
        },
      },
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/dddddd/fff" alt="DUMMY_ALT" width="600" height="400" loading="lazy" />
</figure>`,
        },
      },
    },
    theme: 'warning',
  },
};
