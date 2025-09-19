import {Injectable, signal} from '@angular/core';
import {SidebarMenuInterface, SidebarUiInterface} from '@interfaces';

@Injectable({providedIn: 'root'})
export class SidebarSignals {
  private readonly sideBar$ = signal<SidebarUiInterface>({
    collapsed: false,
    header: {
      title: 'LaundryApp',
      logo: 'droplets',
      subtitle: 'Clean & Fresh'
    },
    menuItems: [
      {
        id: "orders",
        button: {
          label: "My Orders",
          variant: "sidebarActif",
          iconPosition: "left",
          icon: {
            name: "shopping-bag",
            class: 'w-6 h-6'
          }
        },
        isActive: true,
        route: '/orders',
      },
      {
        id: "history",
        button: {
          label: "Order History",
          variant: "sidebarInactif",
          iconPosition: "left",
          icon: {
            name: "history",
            class: 'w-6 h-6'
          }
        },
        isActive: false,
        route: '/history',
      },
    ]
  })

  get sidebar() {
    return this.sideBar$();
  }

  OnSideBarOnClick(event: { btn: SidebarMenuInterface }) {
    this.updateSidebarActiveState(event.btn.id)
    this.setActiveByRoute(event.btn.route ?? '')
  }

  private updateSidebarActiveState(activeId: string): void {
    this.sideBar$.update(currentSidebar => ({
      ...currentSidebar,
      menuItems: currentSidebar.menuItems.map(item => ({
        ...item,
        isActive: item.id === activeId,
        button: {
          ...item.button,
          variant: item.id === activeId ? 'sidebarActif' : 'sidebarInactif'
        }
      }))
    }));
  }

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
}
