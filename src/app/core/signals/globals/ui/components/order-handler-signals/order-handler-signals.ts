import {Injectable, signal, computed, effect} from '@angular/core';
import {CustomerOrderInterface, OrderHandlerUiInterface} from '@interfaces';
import {
  Const_GarmentPossibility,
  CONST_OrderStatusSelectOptions,
  CONST_SizeHElementConstant,
  CONST_SizeWElementConstant,
  CONST_UserRole, EXAMPLE_customerOrdersData,
} from '@constants';
import {TYPE_User} from '@types';
import {HeaderOrderSignals} from '../header-order-signals/header-order-signals';
import {FilterOrderSignals} from '../filter-order-signals/filter-order-signals';
import {TabUiSignals} from '../tab-ui-signals/tab-ui-signals';
import {PaginationSignals} from '../pagination-signals/pagination-signals';

@Injectable({providedIn: 'root'})
export class OrderHandlerSignals {

  private readonly orderHandle$ = signal<OrderHandlerUiInterface<any>>({
    tabs: {
      columns: [
        {key: 'orderRef', label: 'Order Number'},
        {key: 'createdAt', label: 'Date'},
        {key: 'garments', label: 'Items'},
        {key: 'status', label: 'Status'},
        {key: 'totalPrice', label: 'Total'},
        {key: 'estimatedDate', label: 'Estimated'}
      ],
      data: EXAMPLE_customerOrdersData,
      showActions: false,
      striped: true,
      bordered: true,
      btnComments: {
        iconPosition: 'right',
        icon: {
          name: 'file-pen-line',
          class: 'w-6 h-6'
        },
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      },
      modal: {
        isOpen: false,
        title: "",
        btnOptions: [],
        btnCloseButton: {
          callback: function (event: MouseEvent): void {
            throw new Error("Function not implemented.");
          }
        }
      }
    },
    headerOrder: {
      title: "",
      description: "",
    },
    filterOrder: {
      searchInputConfig: {
        id: '',
        value: '',
        type: 'text',
        placeholder: "ex : Order #1",
        disabled: false,
        label: "Search :",
        required: false,
        errorMessage: "",
        class: 'w-72 h-10',
        callback: function (event: Event): void {
          throw new Error("Function not implemented.");
        }
      },
      selectGarmentPossibilities: {
        id: '',
        value: '',
        label: "Select Status",
        required: true,
        placeholder: "ex: Shirts",
        class: 'w-72 h-10',
        options: Const_GarmentPossibility,
        callback: function (event: Event): void {
          throw new Error("Function not implemented.");
        }
      },
      selectOrderStatus: {
        id: '',
        value: '',
        label: "Select Status",
        required: true,
        placeholder: "ex: In Process",
        class: 'w-72 h-10',
        options: CONST_OrderStatusSelectOptions,
        callback: function (event: Event): void {
          throw new Error("Function not implemented.");
        }
      },
      btnTimeToday: {
        label: "Days",
        sizeW: CONST_SizeWElementConstant.MD,
        sizeH: CONST_SizeHElementConstant.MD,
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      },
      btnTimeWeek: {
        label: "Week",
        sizeW: CONST_SizeWElementConstant.MD,
        sizeH: CONST_SizeHElementConstant.MD,
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      },
      btnTimeMonth: {
        label: "Month",
        sizeW: CONST_SizeWElementConstant.MD,
        sizeH: CONST_SizeHElementConstant.MD,
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      },
      btnStartSearch: {
        iconPosition: "left",
        icon: {
          name: 'search',
          class: 'w-6 h-6'
        },
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      },
    },
    pagination: {
      totalCount: 0,
      page: 1,
      pageSize: 10
    },
  });

  constructor(
    protected readonly headerOrderSignals: HeaderOrderSignals,
    protected readonly filterOrderSignals:FilterOrderSignals,
    protected readonly tabOrdersSignals : TabUiSignals,
    protected readonly paginationSignals:PaginationSignals
  ) {
  }

  private initHeaderOrder(userType:TYPE_User): void {
    this.headerOrderSignals.setOrderHeader(userType)
    this.orderHandle$.update(current => ({
      ...current,
      headerOrder: this.headerOrderSignals.headerOrder
    }));
  }

  setTabData(tabData:CustomerOrderInterface[]){
    this.tabOrdersSignals.setTab(tabData);
  }

  private initTabOrders(userType:TYPE_User): void {
    this.tabOrdersSignals.initTabOrder(userType)
    this.orderHandle$.update(current => ({
      ...current,
      tabs: this.tabOrdersSignals.tabOrder
    }));
  }

  initOrder(userType:TYPE_User) {
    this.initHeaderOrder(userType)
    this.initTabOrders(userType)
    return this.orderHandle$()
  }

  get orderHandle() : OrderHandlerUiInterface<any>{
    return this.orderHandle$()
  }

}
