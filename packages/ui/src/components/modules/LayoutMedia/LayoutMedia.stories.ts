import type { Meta, StoryObj } from '@storybook/react';
import Media from '../Media/Media.astro';
import LayoutMedia from './LayoutMedia.astro';

const meta = {
  component: LayoutMedia,
  tags: ['autodocs'],
  title: 'Components/Layout/LayoutMedia',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __TODO: コンポーネントの入れ子プレビューが未実装のため準備中__
* __このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description:
        '`content` スロットにはあらゆるHTML要素およびAstroコンポーネントを配置できます。<br>`media` スロットには `Media` コンポーネントのみ使用を許容します。',
      table: {
        category: 'Slots',
        type: { summary: 'string | HTMLElement | AstroComponentFactory' },
        defaultValue: { summary: undefined },
      },
    },
    directionPc: {
      control: 'select',
      options: [
        undefined,
        'row',
        'rowReverse',
        'column',
        'columnReverse',
        'undefined',
      ],
      description: 'PC幅時の `flex-direction` の値を指定します。',
      table: {
        category: 'Props',
        type: {
          summary: 'row | rowReverse | column | columnReverse | undefined',
        },
        defaultValue: { summary: 'row' },
      },
    },
    directionSp: {
      control: 'select',
      options: [
        undefined,
        'row',
        'rowReverse',
        'column',
        'columnReverse',
        'undefined',
      ],
      description: 'SP幅時の `flex-direction` の値を指定します。',
      table: {
        category: 'Props',
        type: {
          summary: 'row | rowReverse | column | columnReverse | undefined',
        },
        defaultValue: { summary: 'columnReverse' },
      },
    },
  },
  decorators: [
    // Storybook のデフォルトのデコレーターを上書き
    (Story) => {
      const style = document.createElement('style');
      style.textContent = `
        .LayoutMedia__segment {
          padding: 1em;
          border: 1px dashed #999;
        }
      `;
      document.head.appendChild(style);
      return Story();
    },
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: {
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
  <figcaption>Lorem ipsum dolor sit amet</figcaption>
</figure>`,
        },
      },
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
      <LayoutMedia>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </div>

        <div slot="media">
          <Media>
            <figure>
              <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
              <figcaption>Lorem ipsum dolor sit amet</figcaption>
            </figure>
          <Media>
        </div>
      </LayoutMedia>`,
      },
    },
  },
};

export const Reversed: Story = {
  args: {
    slots: {
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
  <figcaption>Lorem ipsum dolor sit amet</figcaption>
</figure>`,
        },
      },
    },
    directionPc: 'rowReverse',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
      <LayoutMedia directionPc="rowReverse">
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
        </div>

        <div slot="media">
          <Media>
            <figure>
              <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
              <figcaption>Lorem ipsum dolor sit amet</figcaption>
            </figure>
          <Media>
        </div>
      </LayoutMedia>`,
      },
    },
  },
};
