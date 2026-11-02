import type { StoryArgs } from '@packages/content/types/Storybook';
import Text from '@packages/ui/modules/Text/Text.astro';
import type { Props } from '@packages/ui/modules/WidgetShowMore/WidgetShowMore.astro';
import WidgetShowMore from '@packages/ui/modules/WidgetShowMore/WidgetShowMore.astro';
import type { Meta, StoryObj } from '@storybook/react';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';

const storybookComponent = (component: unknown) =>
  component as AstroComponentFactory;

const meta = {
  component: WidgetShowMore,
  title: 'Components/Widget/WidgetShowMore',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const AboveTheThreshold: Story = {
  args: {
    slots: {
      default: {
        component: storybookComponent(Text),
        slots: {
          default: `<p>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</p>
<p>広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</p>
<p>何故かと云うと、この二三年、京都には、地震とか辻風とか火事とか饑饉とか云う災がつづいて起った。そこで洛中のさびれ方は一通りではない。旧記によると、仏像や仏具を打砕いて、その丹がついたり、金銀の箔がついたりした木を、路ばたにつみ重ねて、薪の料に売っていたと云う事である。洛中がその始末であるから、羅生門の修理などは、元より誰も捨てて顧る者がなかった。するとその荒れ果てたのをよい事にして、狐狸が棲む。盗人が棲む。とうとうしまいには、引取り手のない死人を、この門へ持って来て、棄てて行くと云う習慣さえ出来た。そこで、日の目が見えなくなると、誰でも気味を悪るがって、この門の近所へは足ぶみをしない事になってしまったのである。</p>`,
        },
      },
    },
  },
};

export const BelowTheThreshold: Story = {
  args: {
    slots: {
      default: {
        component: storybookComponent(Text),
        slots: {
          default: `<p>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</p>`,
        },
      },
    },
  },
};

export const Oneway: Story = {
  args: {
    oneway: true,
    slots: {
      default: {
        component: storybookComponent(Text),
        slots: {
          default: `<p>ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。</p>
<p>広い門の下には、この男のほかに誰もいない。ただ、所々丹塗の剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</p>
<p>何故かと云うと、この二三年、京都には、地震とか辻風とか火事とか饑饉とか云う災がつづいて起った。そこで洛中のさびれ方は一通りではない。旧記によると、仏像や仏具を打砕いて、その丹がついたり、金銀の箔がついたりした木を、路ばたにつみ重ねて、薪の料に売っていたと云う事である。洛中がその始末であるから、羅生門の修理などは、元より誰も捨てて顧る者がなかった。するとその荒れ果てたのをよい事にして、狐狸が棲む。盗人が棲む。とうとうしまいには、引取り手のない死人を、この門へ持って来て、棄てて行くと云う習慣さえ出来た。そこで、日の目が見えなくなると、誰でも気味を悪るがって、この門の近所へは足ぶみをしない事になってしまったのである。</p>`,
        },
      },
    },
  },
};
