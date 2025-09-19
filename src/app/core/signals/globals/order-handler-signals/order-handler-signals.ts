import {Injectable, signal} from '@angular/core';
import {OrderHandlerUiInterface} from '@interfaces';
import {
  CONST_GarmentLabels,
  Const_GarmentPossibility,
  CONST_OrderStatus,
  CONST_OrderStatusSelectOptions,
  CONST_SizeHElementConstant,
  CONST_SizeWElementConstant
} from '@constants';
import { TYPE_FilterChangeInfo, TYPE_ButtonClickInfo } from "@types";

@Injectable({providedIn: 'root'})
export class OrderHandlerSignals {
  private readonly orderHandle$ = signal<OrderHandlerUiInterface>({
    tabs: {
      columns: [
        {key: 'orderNumber', label: 'Order Number'},
        {key: 'date', label: 'Date'},
        {key: 'customer', label: 'Customer'},
        {key: 'items', label: 'Items'},
        {key: 'status', label: 'Status'},
        {key: 'totalPrice', label: 'Total'},
        {key: 'estimatedDate', label: 'Estimated'}
      ],
      data: [
        {
          id: 0,
          orderNumber: 'ORD-2024-001',
          date: '2024-01-15',
          customer: 'Marie Dupont',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 6,
          totalPrice: 25.50,
          estimatedDate: '2024-01-18',
          canCancel: true
        },
        {
          id: 1,
          orderNumber: 'ORD-2024-002',
          date: '2024-01-14',
          customer: 'Jean Martin',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-17',
          canCancel: false,
        },
        {
          id: 2,
          orderNumber: 'ORD-2024-003',
          date: '2024-01-13',
          customer: 'Sophie Laurent',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-16',
          canCancel: false
        },
        {
          id: 3,
          orderNumber: 'ORD-2024-004',
          date: '2024-01-12',
          customer: 'Pierre Durand',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-15',
          canCancel: false
        },
        {
          id: 4,
          orderNumber: 'ORD-2024-005',
          date: '2024-01-11',
          customer: 'Emma Wilson',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-19',
          canCancel: true
        },
        {
          id: 5,
          orderNumber: 'ORD-2024-006',
          date: '2024-01-10',
          customer: 'Lucas Bernard',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-18',
          canCancel: false
        },
        {
          id: 6,
          orderNumber: 'ORD-2024-007',
          date: '2024-01-09',
          customer: 'Camille Moreau',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-20',
          canCancel: false
        },
        {
          id: 7,
          orderNumber: 'ORD-2024-008',
          date: '2024-01-08',
          customer: 'Alexandre Petit',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-12',
          canCancel: false
        },
        {
          id: 8,
          orderNumber: 'ORD-2024-009',
          date: '2024-01-07',
          customer: 'Julie Roux',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-10',
          canCancel: false
        },
        {
          id: 9,
          orderNumber: 'ORD-2024-010',
          date: '2024-01-06',
          customer: 'Thomas Garcia',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '',
          canCancel: false
        },
        {
          id: 10,
          orderNumber: 'ORD-2024-011',
          date: '2024-01-20',
          customer: 'Léa Dubois',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-23',
          canCancel: true
        },
        {
          id: 11,
          orderNumber: 'ORD-2024-012',
          date: '2024-01-19',
          customer: 'Nicolas Roy',
          items: CONST_GarmentLabels.DELICATE_ITEMS,
          status: CONST_OrderStatus.PENDING.label,
          numberItem: 2,
          totalPrice: 85.00,
          estimatedDate: '2024-01-25',
          canCancel: false
        }
      ],
      showActions: true,
      striped: true,
      bordered: true,
      btnItems: {
        iconPosition: 'right',
        icon: {
          name: 'file-pen-line',
          class: 'w-6 h-6'
        }
      }
    },
    headerOrder: {
      title: "My Current Orders",
      description: "Current order status",
      btn: {
        label: "Create new order",
        iconPosition: "left",
        icon: {
          name: 'plus',
          class: 'w-6 h-6'
        }
      }
    },
    filterOrder: {
      searchInputConfig: {
        type: 'text',
        placeholder: "ex : Order #1",
        disabled: false,
        label: "Search :",
        required: false,
        errorMessage: "",
        class: 'w-72 h-10'
      },
      selectGarmentPossibilities: {
        label: "Select Status",
        required: true,
        placeholder: "ex: Shirts",
        class: 'w-72 h-10',
        options: Const_GarmentPossibility
      },
      selectOrderStatus: {
        label: "Select Status",
        required: true,
        placeholder: "ex: In Process",
        class: 'w-72 h-10',
        options: CONST_OrderStatusSelectOptions
      },
      btnTimeToday: {
        label: "Days",
        sizeW: CONST_SizeWElementConstant.MD,
        sizeH: CONST_SizeHElementConstant.MD
      },
      btnTimeWeek: {
        label: "Week",
        sizeW: CONST_SizeWElementConstant.MD,
        sizeH: CONST_SizeHElementConstant.MD
      },
      btnTimeMonth: {
        label: "Mounth",
        sizeW: CONST_SizeWElementConstant.MD,
        sizeH: CONST_SizeHElementConstant.MD
      },
      btnStartSearch: {
        iconPosition: "left",
        icon: {
          name: 'search',
          class: 'w-6 h-6'
        }
      },
    },
    callbacks: {
      handlerHeaderCallBack: function (event: MouseEvent): void {
        console.log('Header button clicked:', event);
      },
      searchInputCallBack: function (infoRef: TYPE_FilterChangeInfo, event: string | string[]): void {
        console.log('Search input changed:', infoRef, event);
      },
      selectGarmentPossibilityCallBack: function (infoRef: TYPE_FilterChangeInfo, event: string | string[]): void {
        console.log('Garment selection changed:', infoRef, event);
      },
      selectOrderStatusCallBack: function (infoRef: TYPE_FilterChangeInfo, event: string | string[]): void {
        console.log('Order status changed:', infoRef, event);
      },
      btnTodayCallBack: function (infoRef: TYPE_ButtonClickInfo, event: string | string[]): void {
        console.log('Today button clicked:', infoRef, event);
      },
      btnWeeklyCallBack: function (infoRef: TYPE_ButtonClickInfo, event: string | string[]): void {
        console.log('Weekly button clicked:', infoRef, event);
      },
      btnMonthCallBack: function (infoRef: TYPE_ButtonClickInfo, event: string | string[]): void {
        console.log('Month button clicked:', infoRef, event);
      },
      btnStartSearchCallBack: function (infoRef: TYPE_ButtonClickInfo, event: string | string[]): void {
        console.log('Start search button clicked:', infoRef, event);
      },
      tabElementOnClickCallBack: function (event: number): void {
        console.log('Table element clicked:', event);
      }
    }
  })

  get orderHandle():OrderHandlerUiInterface{
    return this.orderHandle$();
  }
}
