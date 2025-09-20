import {
  CONST_SizeHElementConstant,
  CONST_SizeWElementConstant,
  CONST_TextAlignElementConstant
} from '@constants';

export type TYPE_SizeW = typeof CONST_SizeWElementConstant[keyof typeof CONST_SizeWElementConstant];
export type TYPE_SizeH = typeof CONST_SizeHElementConstant[keyof typeof CONST_SizeHElementConstant];
export type TYPE_TextAlign = typeof CONST_TextAlignElementConstant[keyof typeof CONST_TextAlignElementConstant];
