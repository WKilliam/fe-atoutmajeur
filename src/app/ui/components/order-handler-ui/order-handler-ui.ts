import {Component, Input} from '@angular/core';
import { OrderHandlerUiInterface} from '@interfaces';
import {HeaderOrderHandlerUi} from '../header-order-handler-ui/header-order-handler-ui';
import {FilterOrderUi} from '../filter-order-ui/filter-order-ui';
import {TabsDataUi} from '../tabs-data-ui/tabs-data-ui';

@Component({
  selector: 'order-handler-ui',
  imports: [HeaderOrderHandlerUi, FilterOrderUi, TabsDataUi],
  template: `
    <div class="h-screen flex flex-col bg-light">
      <!-- Header Section - Fixe -->
      <div class="flex-shrink-0 shadow-sm border-b border-accent">
        <header-order-ui
          [headerOrder]="orderHandler.headerOrder"
        />
      </div>

      <!-- Filter Section - Fixe -->
      <div class="flex-shrink-0 border-b border-accent">
        <filter-order-ui
          [filterOrder]="orderHandler.filterOrder"
        />
      </div>

      <!-- Table Section - Scrollable -->
      <div class="flex-1 overflow-hidden">
        <div class="h-full overflow-auto">
          <tabs-data-ui
            [config]="orderHandler.tabs"
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
        label: "",
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      }
    },
    filterOrder: {
      searchInputConfig: {
        type: "number",
        label: "",
        required: false,
        errorMessage: "",
        callback: function (event: Event): void {
          throw new Error("Function not implemented.");
        }
      },
      selectGarmentPossibilities: {
        options: [],
        required: false,
        callback: function (event: Event): void {
          throw new Error("Function not implemented.");
        }
      },
      selectOrderStatus: {
        options: [],
        required: false,
        callback: function (event: Event): void {
          throw new Error("Function not implemented.");
        }
      },
      btnTimeToday: {
        label: "",
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      },
      btnTimeWeek: {
        label: "",
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      },
      btnTimeMonth: {
        label: "",
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      },
      btnStartSearch: {
        label: "",
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      }
    },
    tabs: {
      columns: [],
      data: [],
      btnItems: {
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
  };
}
