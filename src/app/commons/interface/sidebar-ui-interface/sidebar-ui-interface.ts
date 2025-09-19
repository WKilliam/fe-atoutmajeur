import {SidebarMenuInterface,SidebarHeaderInterface} from '@interfaces';

export interface SidebarUiInterface {
  header: SidebarHeaderInterface;
  menuItems: SidebarMenuInterface[];
  collapsed: boolean;
}
