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
    style: 'normal',
    url: '/assets/fonts/NotoSansJP-VariableFont_wght.woff2',
    weight: '400',
  },
  {
    family: 'Noto Sans Japanese',
    style: 'normal',
    url: '/assets/fonts/NotoSansJP-VariableFont_wght.woff2',
    weight: '700',
  },
  {
    family: 'Noto Serif Japanese',
    style: 'normal',
    url: '/assets/fonts/NotoSerifJP-VariableFont_wght.woff2',
    weight: '400',
  },
  {
    family: 'Noto Serif Japanese',
    style: 'normal',
    url: '/assets/fonts/NotoSerifJP-VariableFont_wght.woff2',
    weight: '700',
  },
  {
    family: 'Roboto',
    style: 'normal',
    url: '/assets/fonts/Roboto-VariableFont_wdth,wght.woff2',
    weight: '400',
  },
  {
    family: 'Roboto',
    style: 'normal',
    url: '/assets/fonts/Roboto-VariableFont_wdth,wght.woff2',
    weight: '700',
  },
  {
    family: 'Roboto',
    style: 'italic',
    url: '/assets/fonts/Roboto-Italic-VariableFont_wdth,wght.woff2',
    weight: '400',
  },
  {
    family: 'Roboto',
    style: 'italic',
    url: '/assets/fonts/Roboto-Italic-VariableFont_wdth,wght.woff2',
    weight: '700',
  },
  {
    family: 'Roboto Mono',
    style: 'normal',
    url: '/assets/fonts/RobotoMono-VariableFont_wght.woff2',
    weight: '400',
  },
  {
    family: 'Roboto Mono',
    style: 'italic',
    url: '/assets/fonts/RobotoMono-Italic-VariableFont_wght.woff2',
    weight: '400',
  },
];

function createFontFaces(): FontFace[] {
  return FONT_DEFINITIONS.map(
    (f) =>
      new FontFace(f.family, `url(${f.url}) format("woff2")`, {
        display: 'swap',
        style: f.style,
        weight: f.weight,
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
