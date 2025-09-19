import {Component, inject} from '@angular/core';
import {DashboardSignals} from '@signals-services';
import {SidebarUi} from '../../components/sidebar-ui/sidebar-ui';
import {OrderHandlerUi} from '../../components/order-handler-ui/order-handler-ui';

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
        <sidebar-ui
          [sidebar]="this.dashboardSignals.sidebar()"
          (sideBarOnClick)="this.dashboardSignals.onSideBarOnClick($event)"
        />
      </div>
      <div class="flex flex-col flex-1 h-full overflow-auto ml-64 pr-4">
        <order-handler-ui
          [orderHandler]="this.dashboardSignals.orderHandler()"
        ></order-handler-ui>
      </div>
    </div>
  `,
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  protected readonly dashboardSignals = inject(DashboardSignals);
}
