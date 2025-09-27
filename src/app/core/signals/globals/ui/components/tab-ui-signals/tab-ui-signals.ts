import {Injectable, signal} from '@angular/core';
import {CommentsInterface, CustomerOrderInterface, TabsDataUiInterface} from '@interfaces';
import {TYPE_User} from '@types';
import {CONST_UserRole, EXAMPLE_customerOrdersData} from '@constants';

@Injectable({providedIn: 'root'})
export class TabUiSignals {


  private readonly tabsData$ = signal<CustomerOrderInterface[]>([])
  private readonly comments = signal<CommentsInterface[]>([])

  private readonly tabOrders$ = signal<TabsDataUiInterface>({
    columns: [
      {key: 'orderRef', label: 'Order Number'},
      {key: 'createdAt', label: 'Date'},
      {key: 'garments', label: 'Items'},
      {key: 'status', label: 'Status'},
      {key: 'totalPrice', label: 'Total'},
      {key: 'estimatedDate', label: 'Estimated'},
      {key: 'createdAt', label: 'created At'}
    ],
    data: EXAMPLE_customerOrdersData,
    showActions: true,
    striped: true,
    bordered: true,
    btnComments: {
      iconPosition: 'right',
      icon: {
        name: 'comment',
        class: 'w-6 h-6'
      },
      callback: function (event: MouseEvent): void {

      }
    },
    modal: {
      isOpen: false,
      title: "Edit Order",
      btnOptions: [],
      btnCloseButton: {
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      }
    }
  })

  get tabOrder(): TabsDataUiInterface {
    return this.tabOrders$()
  }

  setTab(tabs: CustomerOrderInterface[]): void {
    this.tabOrders$.update(current => ({
      ...current,
      data: tabs
    }));
  }

  initTabOrder(userType: TYPE_User) {
    if (userType === CONST_UserRole.Admin) {
      this.tabOrders$.update(current => ({
        ...current,
        btnChange: {
          iconPosition: 'right',
          icon: {
            name: 'file-pen-line',
            class: 'w-6 h-6'
          },
          callback: (event: MouseEvent) => {

          }
        }
      }));
      return this.tabOrder;
    }else{
      return this.tabOrders$()
    }
  }
}
