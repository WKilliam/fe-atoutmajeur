import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderCallBackInterface, OrderHandlerUiInterface} from '@interfaces';
import {HeaderOrderHandlerUi} from '../header-order-handler-ui/header-order-handler-ui';
import {FilterOrderUi} from '../filter-order-ui/filter-order-ui';
import {TabsDataUi} from '../tabs-data-ui/tabs-data-ui';
import {TYPE_ButtonClickInfo, TYPE_FilterChangeInfo} from '@types';

@Component({
  selector: 'order-handler-ui',
  imports: [HeaderOrderHandlerUi, FilterOrderUi, TabsDataUi],
  template: `
    <div class="h-screen flex flex-col bg-light">
      <!-- Header Section - Fixe -->
      <div class="flex-shrink-0 shadow-sm border-b border-accent">
        <header-order-ui
          [headerOrder]="orderHandler.headerOrder"
          (headerOnClickButton)="this.orderHandler.callbacks.handlerHeaderCallBack($event)"
        />
      </div>

      <!-- Filter Section - Fixe -->
      <div class="flex-shrink-0 border-b border-accent">
        <filter-order-ui
          [filterOrder]="orderHandler.filterOrder"
          (handlerSelectOrderStatusChanged)="this.orderHandler.callbacks
          .selectOrderStatusCallBack('select status',$event)"
          (handlerSearchInputChanged)="this.orderHandler.callbacks
          .searchInputCallBack('input',$event)"
          (handlerSelectGarmentStatusChanged)="this.orderHandler.callbacks
          .selectGarmentPossibilityCallBack('select garment possibilities',$event)"

          (handlerOnClickedMouthChanged)="this.orderHandler.callbacks
          .btnMonthCallBack('month',$event)"
          (handlerOnClickedStartSearchChanged)="this.orderHandler.callbacks
          .btnStartSearchCallBack('start search',$event)"
          (handlerOnClickedTodayChanged)="this.orderHandler.callbacks
          .btnTodayCallBack('today',$event)"
          (handlerOnClickedWeekChanged)="this.orderHandler.callbacks
          .btnWeeklyCallBack('week',$event)"
        />
      </div>

      <!-- Table Section - Scrollable -->
      <div class="flex-1 overflow-hidden">
        <div class="h-full overflow-auto">
          <tabs-data-ui
            [config]="orderHandler.tabs"
            (handlerOnClick)="this.orderHandler.callbacks
            .tabElementOnClickCallBack($event)"
          />
        </div>
      </div>
    </div>
  `,
})
export class OrderHandlerUi {
  @Input({required: true}) orderHandler: OrderHandlerUiInterface = {
    headerOrder: {
      title: "",
      description: "",
      btn: {
        label: ""
      }
    },
    filterOrder: {
      searchInputConfig: {
        type: "number",
        label: "",
        required: false,
        errorMessage: ""
      },
      selectGarmentPossibilities: {
        options: [],
        required: false
      },
      selectOrderStatus: {
        options: [],
        required: false
      },
      btnTimeToday: {
        label: ""
      },
      btnTimeWeek: {
        label: ""
      },
      btnTimeMonth: {
        label: ""
      },
      btnStartSearch: {
        label: ""
      }
    },
    tabs: {
      columns: [],
      data: [],
      btnItems: {}
    },
    callbacks: {
      handlerHeaderCallBack: function (event: MouseEvent): void {
        throw new Error("Function not implemented.");
      },
      searchInputCallBack: function (infoRef: TYPE_FilterChangeInfo, event: string | string[]): void {
        throw new Error("Function not implemented.");
      },
      selectGarmentPossibilityCallBack: function (infoRef: TYPE_FilterChangeInfo, event: string | string[]): void {
        throw new Error("Function not implemented.");
      },
      selectOrderStatusCallBack: function (infoRef: TYPE_FilterChangeInfo, event: string | string[]): void {
        throw new Error("Function not implemented.");
      },
      btnTodayCallBack: function (infoRef: TYPE_ButtonClickInfo, event: string | string[]): void {
        throw new Error("Function not implemented.");
      },
      btnWeeklyCallBack: function (infoRef: TYPE_ButtonClickInfo, event: string | string[]): void {
        throw new Error("Function not implemented.");
      },
      btnMonthCallBack: function (infoRef: TYPE_ButtonClickInfo, event: string | string[]): void {
        throw new Error("Function not implemented.");
      },
      btnStartSearchCallBack: function (infoRef: TYPE_ButtonClickInfo, event: string | string[]): void {
        throw new Error("Function not implemented.");
      },
      tabElementOnClickCallBack: function (event: number): void {
        throw new Error("Function not implemented.");
      }
    }
  };
}
