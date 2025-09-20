import {IconsUiInterfaces} from '../icons-ui-interface/icons-ui-interfaces';
import {TYPE_SizeH, TYPE_SizeW, TYPE_TextAlign} from '@types';

export interface ButtonUiInterface {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'sidebarActif' | 'sidebarInactif' | 'iconBtn';
  sizeW?: TYPE_SizeW;
  sizeH?: TYPE_SizeH;
  textAlign?: TYPE_TextAlign;
  iconPosition?: 'left' | 'right' | 'center';
  icon?: IconsUiInterfaces;
  disabled?: boolean;
  loading?: boolean;
  callback: (event: MouseEvent) => void;
}
