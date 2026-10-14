import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props as CardPropType } from '@packages/ui/modules/Card/Card.astro';
import Card from '@packages/ui/modules/Card/Card.astro';
import Media from '@packages/ui/modules/Media/Media.astro';
import Text from '@packages/ui/modules/Text/Text.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card/Card',
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    class: { table: { disable: true } },
  },
} satisfies Meta<StoryArgs<CardPropType>>;

export default meta;
type Story = StoryObj<StoryArgs<CardPropType>>;

export const Default: Story = {
  args: {
    title: 'タイトルタイトルタイトル',
    date: '2026-09-25 08:30',
    slots: {
      body: {
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

export const Headless: Story = {
  args: {
    date: '2026-09-25 08:30',
    slots: {
      body: {
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
      body: {
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
    title: 'タイトルタイトルタイトル',
    date: '2026-09-25 08:30',
    outline: true,
    link: {
      href: '#',
    },
    slots: {
      body: {
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

export const DirectColumnReverse: Story = {
  args: {
    date: '2026-09-25 08:30',
    directSp: 'column-reverse',
    directPc: 'column-reverse',
    slots: {
      body: {
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
    directSp: 'row',
    directPc: 'row',
    slots: {
      body: {
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
    directSp: 'row-reverse',
    directPc: 'row-reverse',
    slots: {
      body: {
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
    theme: 'caution',
    slots: {
      body: {
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

export const ThemeWarning: Story = {
  args: {
    date: '2026-09-25 08:30',
    theme: 'warning',
    slots: {
      body: {
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
