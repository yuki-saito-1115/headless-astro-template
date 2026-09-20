export const COMMON_TYPE_HEADING_VALUES = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] as const;

export type CommonTypeHeading =
  | (typeof COMMON_TYPE_HEADING_VALUES)[number]
  | 'div';

export const COMMON_TYPE_ICON_SPRITE_VALUES = [
  'arrow-up-right-from-square',
  'download',
  'file-excel',
  'file-pdf',
  'file-powerpoint',
  'file-word',
  'file-zipper',
  'window-restore',
  'xmark',
] as const;

export type CommonTypeIconSprite =
  (typeof COMMON_TYPE_ICON_SPRITE_VALUES)[number];
