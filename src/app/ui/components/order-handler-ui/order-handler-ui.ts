import {Component, Input} from '@angular/core';
import { OrderHandlerUiInterface} from '@interfaces';
import {HeaderOrderHandlerUi} from '../header-order-handler-ui/header-order-handler-ui';
import {FilterOrderUi} from '../filter-order-ui/filter-order-ui';
import {TabsDataUi} from '../tabs-data-ui/tabs-data-ui';
import {PaginationUi} from '../pagination-ui/pagination-ui';

@Component({
  selector: 'order-handler-ui',
  imports: [HeaderOrderHandlerUi, FilterOrderUi, TabsDataUi, PaginationUi],
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

      <!-- Table Section - Scrollable avec flex-1 -->
      <div class="flex-1 overflow-hidden flex flex-col">
        <div class="flex-1 overflow-auto">
          <tabs-data-ui
            [config]="orderHandler.tabs"
          />
        </div>

        <!-- Pagination Section - Fixe en bas -->
        <div class="flex-shrink-0 border-t border-accent bg-white">
          <pagination-ui [pagination]="orderHandler.pagination"/>
        </div>
      </div>
    </div>
  `,
})
export class OrderHandlerUi {
  @Input({required: true}) orderHandler: OrderHandlerUiInterface<any> = {
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
        id:'',
        value:'',
        type: "number",
        label: "",
        required: false,
        errorMessage: "",
        callback: function (event: Event): void {
          throw new Error("Function not implemented.");
        }
      },
      selectGarmentPossibilities: {
        id:'',
        value:'',
        options: [],
        required: false,
        callback: function (event: Event): void {
          throw new Error("Function not implemented.");
        }
      },
      selectOrderStatus: {
        id:'',
        value:'',
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
    pagination: {
      totalCount: 0,
      page: 0,
      pageSize: 0
    },
    tabs: {
      columns: [],
      data: [],
      btnComments: {
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
