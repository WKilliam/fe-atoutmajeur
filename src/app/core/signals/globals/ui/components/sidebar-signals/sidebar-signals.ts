import { Injectable, signal} from '@angular/core';
import { SidebarUiInterface} from '@interfaces';
import {CONST_UserType} from '@constants';
import {TYPE_User} from '@types';

@Injectable({providedIn: 'root'})
export class SidebarSignals {

  private readonly sideBar$ = signal<SidebarUiInterface>({
    collapsed: false,
    header: {
      title: 'LaundryApp',
      logo: 'droplets',
      subtitle: 'Clean & Fresh'
    },
    menuItems: []
  });

  setActiveByRoute(route: string): void {
    this.sideBar$.update(currentSidebar => {
      const activeItem = currentSidebar.menuItems.find(item => item.route === route);
      if (!activeItem) return currentSidebar;

      return {
        ...currentSidebar,
        menuItems: currentSidebar.menuItems.map(item => ({
          ...item,
          isActive: item.id === activeItem.id,
          button: {
            ...item.button,
            variant: item.id === activeItem.id ? 'sidebarActif' : 'sidebarInactif'
          }
        }))
      };
    });
  }

  formatSidebarByUserType(userType:TYPE_User){
    return userType === CONST_UserType.ADMIN.value
      ? [
        {
          id: "orders",
          button: {
            label: "My Orders",
            variant: "sidebarActif",
            iconPosition: "left",
            icon: {name: "shopping-bag", class: 'w-6 h-6'},
            callback: function (event: MouseEvent): void {
            }
          },
          isActive: true,
        },
        {
          id: "history",
          button: {
            label: "Order History",
            variant: "sidebarInactif",
            iconPosition: "left",
            icon: {name: "history", class: 'w-6 h-6'},
            callback: function (event: MouseEvent): void {
            }
          },
          isActive: false,
        },
      ]
      :
      [
        {
          id: "orders",
          button: {
            label: "My Orders",
            variant: "sidebarActif",
            iconPosition: "left",
            icon: {name: "shopping-bag", class: 'w-6 h-6'},
            callback: function (event: MouseEvent): void {
            }
          },
          isActive: true,
        },
        {
          id: "history",
          button: {
            label: "Order History",
            variant: "sidebarInactif",
            iconPosition: "left",
            icon: {name: "history", class: 'w-6 h-6'},
            callback: function (event: MouseEvent): void {
            }
          },
          isActive: false,
        },
        {
          id: "report",
          button: {
            label: "Report",
            variant: "sidebarInactif",
            iconPosition: "left",
            icon: {name: "report", class: 'w-6 h-6'},
            callback: function (event: MouseEvent): void {
            }
          },
          isActive: false,
        },
      ]
  }

  get sidebar(): SidebarUiInterface {
    return this.sideBar$();
  }

  initSideBar(userType:TYPE_User): void {
    this.sideBar$.update(custom => ({
      ...custom,
        menubar: this.formatSidebarByUserType(userType)
    }))
  }
}
