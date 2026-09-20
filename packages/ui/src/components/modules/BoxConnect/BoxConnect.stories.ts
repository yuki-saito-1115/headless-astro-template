import type { Meta, StoryObj } from '@storybook/react';
import BoxConnect from './BoxConnect.astro';

const meta = {
  title: 'Components/Box/BoxConnect',
  component: BoxConnect,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `__このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    slots: {
      control: 'object',
      description: `直下には \`div.BoxConnect__segment\` のみ配置を許容します。<br>\`div.BoxConnect__segment\` の中ではあらゆるHTML要素およびAstroコンポーネントの使用を許容します。<br>要素・コンポーネント同士の間隔調整はTailwind CSSのユーティリティを利用してください。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLDivElement' },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: {
      default: `<div class="BoxConnect__segment">
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,</p>
</div>

<div class="BoxConnect__segment">
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,</p>
</div>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <BoxConnect>
          <div class="BoxConnect__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="BoxConnect__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>
        </BoxConnect>`,
      },
    },
  },
};
