import {computed, Injectable} from '@angular/core';
import {SidebarMenuInterface} from '@interfaces';
import {SidebarSignals,OrderHandlerSignals} from '@signals-services';

@Injectable({providedIn: 'root'})
export class DashboardSignals {
  constructor(
    private sidebarSignals: SidebarSignals,
    private orderSignals: OrderHandlerSignals
  ) {}

  get sidebar() {
    return computed(() => this.sidebarSignals.sidebar);
  }

  onSideBarOnClick(event: { btn: SidebarMenuInterface }) {
    this.sidebarSignals.OnSideBarOnClick(event);
  }

  get orderHandler(){
    return computed(()=>this.orderSignals.orderHandle)
  }


}
