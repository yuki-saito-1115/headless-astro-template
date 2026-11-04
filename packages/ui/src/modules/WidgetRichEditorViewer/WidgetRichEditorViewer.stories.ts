import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/WidgetRichEditorViewer/WidgetRichEditorViewer.astro';
import WidgetRichEditorViewer from '@packages/ui/modules/WidgetRichEditorViewer/WidgetRichEditorViewer.astro';

const meta = {
  component: WidgetRichEditorViewer,
  title: 'Components/Widget/WidgetRichEditorViewer',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    datas: `<h2>見出しレベル2</h2>

<h3>見出しレベル3</h3>

<h3>見出しレベル4</h4>

<h4>見出しレベル5</h5>

<h5>見出しレベル6</h6>

<p>段落段落段落段落段落段落段落段落段落段落</p>

<p>改行<br />改行</p>

<p><strong>太字</strong> <em>斜体</em> <u>下線</u> <s>打消し戦</s> <code>コード</code></p>

<hr />

<table>
  <tbody>
    <tr>
      <th>テキスト</th>
      <th>テキスト</th>
      <th>テキスト</th>
    </tr>
    <tr>
      <td>テキスト</td>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
    <tr>
      <td>テキスト</td>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
  </tbody>
</table>


<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet
  <ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  </ul>
</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>

<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet
  <ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  </ol>
</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol>

<p>段落段<a href="DUMMY_LINK">リンク</a>落段落段落段落段落段落段落段落段落</p>

<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
</figure>

<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
  <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
</figure>

<figure>
  <a href="DUMMY_LINK">
    <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
    <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
  </a>
</figure>

<figure style="text-align: left;">
    <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
    <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
</figure>

<figure style="text-align: right;">
    <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
    <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
</figure>

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/B6_iQvaIjXw?si=qySgrpaeN8jW2Uts" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen="" allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" referrerpolicy="strict-origin"></iframe></div>

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 75%;"><iframe src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC5AabUmFCrVTvkne8HfUV-Qotqx6-MC3E&amp;center=38.2553991,140.888458&amp;zoom=15" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen=""></iframe></div>
`,
  },
};
