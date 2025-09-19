import {SidebarMenuInterface} from '@interfaces';
import {SidebarHeaderInterface} from '@interfaces';

export interface SidebarUiInterface {
  header: SidebarHeaderInterface;
  menuItems: SidebarMenuInterface[];
  collapsed: boolean;
}
