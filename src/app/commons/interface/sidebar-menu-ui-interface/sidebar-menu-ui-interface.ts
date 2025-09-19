import {ButtonUiInterface} from '@interfaces';

export interface SidebarMenuInterface {
  id: string;
  button: ButtonUiInterface;
  route?: string;
  isActive?: boolean;
  badge?: string | number;
}
