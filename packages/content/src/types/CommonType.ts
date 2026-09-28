/**
 * カラム状の段組を指定するためのpropsの型
 */
/* Storybookのoptionsなど、ランタイムで値の列挙が必要な場合に使用する */
export const COMMON_TYPE_COLUMN_VALUES = [
  '1',
  '2',
  '3',
  '4',
  '5',
  'auto',
] as const;
/* `COMMON_TYPE_COLUMN_VALUES` を型の単一の情報源とし、props の型定義に使用する */
export type CommonTypeColumn = (typeof COMMON_TYPE_COLUMN_VALUES)[number];

/**
 * 見出しレベルを指定するためのpropsの型
 */
/* Storybookのoptionsなど、ランタイムで値の列挙が必要な場合に使用する */
export const COMMON_TYPE_HEADING_VALUES = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'div',
] as const;
/* `COMMON_TYPE_HEADING_VALUES` を型の単一の情報源とし、propsの型定義に使用する */
export type CommonTypeHeading = (typeof COMMON_TYPE_HEADING_VALUES)[number];

/**
 * リンクのpropsの型
 */
export type CommonTypeLink = {
  href: string;
  label: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | undefined;
};
