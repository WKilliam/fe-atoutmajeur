import {effect, Injectable, signal} from '@angular/core';
import {OrderHandlerSignals} from '../../components/order-handler-signals/order-handler-signals';
import {StoreHandlerSignals} from '../../../../core/store/store-handler-signals';
import {HttpApiCore} from '../../../../../http/httpApiCore';
import {SidebarSignals} from '../../components/sidebar-signals/sidebar-signals';
import {EXAMPLE_customerOrdersData} from '@constants';
import {CustomerOrderInterface, PagedData} from '@interfaces';

@Injectable({providedIn: 'root'})
export class DashboardSignals {

  private readonly paginationData$  = signal<PagedData<CustomerOrderInterface>>({
    data: EXAMPLE_customerOrdersData,
    page: 0,
    pageSize: 0,
    totalCount: 0
  });

  constructor(
    protected sidebarSignals: SidebarSignals,
    protected orderSignals: OrderHandlerSignals,
    protected readonly storeSignals: StoreHandlerSignals,
    protected readonly httpApiCore: HttpApiCore
  ) {
    effect(() => {
      const storeSession = this.storeSignals.authSession;
      if (storeSession.firstName !== '' && storeSession.lastName !== '') {
        this.sidebarSignals.initSideBar(this.storeSignals.authSession.role)
        this.orderSignals.initOrder(this.storeSignals.authSession.role)
        this.paginationData$.set(this.storeSignals.ordersDatas)
      }
      if(this.storeSignals.ordersDatas.data && this.storeSignals.ordersDatas.data.length > 0) {
        this.orderSignals.setTabData(this.storeSignals.ordersDatas.data)
      }
    });
  }

  get paginationData() : PagedData<CustomerOrderInterface> {
    return this.paginationData$()
  }

  sidebar() {
    return this.sidebarSignals.sidebar
  }

  orderHandler() {
    return this.orderSignals.orderHandle
  }
}
