import {IconsUiInterfaces} from '../icons-ui-interface/icons-ui-interfaces';

export interface SidebarMenuInterface {
  id: string;
  label: string;
  icon?: IconsUiInterfaces;
  route?: string;
  isActive?: boolean;
  badge?: string | number;
}
