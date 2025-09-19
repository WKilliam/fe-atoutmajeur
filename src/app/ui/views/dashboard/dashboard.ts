import {Component} from '@angular/core';
import {SidebarUi} from '@ui-component';
import {SidebarUiInterface} from '@interfaces';
import {OrderHandlerUi} from '@ui-component';

@Component({
  selector: 'dashboard-view',
  imports: [
    SidebarUi,
    SidebarUi,
    OrderHandlerUi
  ],
  template: `
    <div class="flex h-full">
      <div class="p-2 h-full">
        <sidebar-ui [sidebar]="sidebar"></sidebar-ui>
      </div>
      <div class="flex flex-col flex-1 h-full overflow-auto ml-64">
        <order-handler-ui></order-handler-ui>
      </div>
    </div>
  `,
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  protected readonly sidebar: SidebarUiInterface = {
    collapsed: false,
    header: {
      title: 'LaundryApp',
      logo: 'droplets',
      subtitle: 'Clean & Fresh'
    },
    menuItems: [
      {
        id: "orders",
        label: "My Orders",
        icon: {
          name: "shopping-bag"
        },
        isActive: true,
        route: '/orders',
      },
      {
        id: "history",
        label: "Order History",
        icon: {
          name: "history"
        },
        isActive: false,
        route: '/history',
      },

    ]
  }
}
