/**
 * フォント読み込み処理
 * フォント一覧はこのファイルの FONT_DEFINITIONS。config.ts の plugins.fontList.path にこのファイルパスを指定する。
 */

interface FontDefinition {
  family: string;
  style: string;
  url: string;
  weight: string;
}

/** このファイルが loadFonts の唯一の定義元。weightは theme.css の --user-font-weight-* に合わせて 400/700 のみを列挙する */
const FONT_DEFINITIONS: FontDefinition[] = [
  {
    family: 'Noto Sans Japanese',
    weight: '400',
    style: 'normal',
    url: '/assets/fonts/NotoSansJP-VariableFont_wght.woff2',
  },
  {
    family: 'Noto Sans Japanese',
    weight: '700',
    style: 'normal',
    url: '/assets/fonts/NotoSansJP-VariableFont_wght.woff2',
  },
  {
    family: 'Noto Serif Japanese',
    weight: '400',
    style: 'normal',
    url: '/assets/fonts/NotoSerifJP-VariableFont_wght.woff2',
  },
  {
    family: 'Noto Serif Japanese',
    weight: '700',
    style: 'normal',
    url: '/assets/fonts/NotoSerifJP-VariableFont_wght.woff2',
  },
  {
    family: 'Roboto',
    weight: '400',
    style: 'normal',
    url: '/assets/fonts/Roboto-VariableFont_wdth,wght.woff2',
  },
  {
    family: 'Roboto',
    weight: '700',
    style: 'normal',
    url: '/assets/fonts/Roboto-VariableFont_wdth,wght.woff2',
  },
  {
    family: 'Roboto',
    weight: '400',
    style: 'italic',
    url: '/assets/fonts/Roboto-Italic-VariableFont_wdth,wght.woff2',
  },
  {
    family: 'Roboto',
    weight: '700',
    style: 'italic',
    url: '/assets/fonts/Roboto-Italic-VariableFont_wdth,wght.woff2',
  },
  {
    family: 'Roboto Mono',
    weight: '400',
    style: 'normal',
    url: '/assets/fonts/RobotoMono-VariableFont_wght.woff2',
  },
  {
    family: 'Roboto Mono',
    weight: '400',
    style: 'italic',
    url: '/assets/fonts/RobotoMono-Italic-VariableFont_wght.woff2',
  },
];

function createFontFaces(): FontFace[] {
  return FONT_DEFINITIONS.map(
    (f) =>
      new FontFace(f.family, `url(${f.url}) format("woff2")`, {
        weight: f.weight,
        style: f.style,
        display: 'swap',
      }),
  );
}

/**
 * フォントを読み込み、document.fonts に登録して適用する
 */
export function loadFonts(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const faces = createFontFaces();
    Promise.all(
      faces.map(async (face) => {
        await face.load();
        document.fonts.add(face);
      }),
    ).catch((error) => {
      console.error('Font loading failed:', error);
    });
  });
}
