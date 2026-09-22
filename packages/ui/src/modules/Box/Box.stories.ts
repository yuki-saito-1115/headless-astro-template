import { COMMON_TYPE_HEADING_VALUES } from '@packages/content/types/CommonType';
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box.astro';

const meta = {
  component: Box,
  tags: ['autodocs'],
  title: 'Components/Box/Box',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `__このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description:
        'あらゆるHTML要素およびAstroコンポーネントの使用を許容します。<br>要素・コンポーネント同士の間隔調整はTailwind CSSのユーティリティを利用してください。',
      table: {
        category: 'Slots',
        type: { summary: 'string | HTMLElement | AstroComponentFactory' },
        defaultValue: { summary: undefined },
      },
    },
    element: {
      control: 'radio',
      options: [undefined, 'div', 'details'],
      description: 'ルートのHTML要素を指定します。',
      table: {
        category: 'Props',
        type: { summary: 'div | details | undefined' },
        defaultValue: { summary: 'div' },
      },
    },
    titleElement: {
      control: 'select',
      options: [...COMMON_TYPE_HEADING_VALUES, 'summary'],
      description: `タイトル部分のHTML要素を指定します。<br>\`element\` が \`details\` の場合は強制的に \`summary\` が設定されます。`,
      table: {
        category: 'Props',
        type: { summary: 'CommonTypeHeading | summary | undefined' },
        defaultValue: { summary: 'div' },
      },
    },
    title: {
      control: 'text',
      description: `テキストノード以外の使用を禁止します。<br>必要ない場合は省略可能ですが \`element\` が \`details\` の場合は省略することができません。`,
      table: {
        category: 'Props',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    theme: {
      control: 'radio',
      options: [undefined, 'related', 'important', 'alert'],
      description: `配色を設定できます。<br>セマンティクスに変化はありません。`,
      table: {
        category: 'Props',
        type: { summary: 'related | important | alert | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    scroll: {
      control: 'boolean',
      description: `コンテンツ部分（\`slot\`）をスクロールさせるかどうかを指定します。<br>\`true\` の場合はコンテンツ部分の高さが \`200px\` に固定されます。`,
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: 'boolean',
      description: `\`element\` が \`details\`の場合にのみ有効です。`,
      table: {
        category: 'HTML Attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Box title="Lorem ipsum dolor sit amet">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </Box>`,
      },
    },
  },
};

export const Headless: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Box>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </Box>`,
      },
    },
  },
};

export const Scrollable: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N',
    },
    title: 'Lorem ipsum dolor sit amet',
    scroll: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Box title="Lorem ipsum dolor sit amet" scroll>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </Box>`,
      },
    },
  },
};

export const Details: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
    element: 'details',
    open: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Box title="Lorem ipsum dolor sit amet" element="details" open>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </Box>`,
      },
    },
  },
};

export const ThemeRelated: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
    theme: 'related',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Box title="Lorem ipsum dolor sit amet" theme="related">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </Box>`,
      },
    },
  },
};

export const ThemeImportant: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
    theme: 'important',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Box title="Lorem ipsum dolor sit amet" theme="important">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </Box>`,
      },
    },
  },
};

export const ThemeAlert: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
    theme: 'alert',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Box title="Lorem ipsum dolor sit amet" theme="alert">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </Box>`,
      },
    },
  },
};
