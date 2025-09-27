import {Injectable, signal} from '@angular/core';
import {OrderFilterUiInterface, FilterOrderInterface} from '@interfaces';
import {
  Const_GarmentPossibility,
  CONST_OrderStatusSelectOptions,
  CONST_SizeHElementConstant,
  CONST_SizeWElementConstant
} from '@constants';
import {HttpApiCore} from '../../../../../http/httpApiCore';

export type elementChange = 'searchInput' | 'selectGarment' | 'selectStatus'

@Injectable({providedIn: 'root'})
export class FilterOrderSignals {

  private readonly filterOrder$ = signal<OrderFilterUiInterface>({
    searchInputConfig: {
      id: 'search',
      value: '',
      type: 'text',
      placeholder: "ex : Order #1",
      disabled: false,
      label: "Search :",
      required: false,
      errorMessage: "",
      class: 'w-72 h-10',
      callback: (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.updateFieldValueInput('searchInput', target);
      }
    },
    selectGarmentPossibilities: {
      id: 'garment',
      value: '',
      label: "Select Garment",
      required: false,
      placeholder: "ex: Shirts",
      class: 'w-72 h-10',
      options: Const_GarmentPossibility,
      callback: (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.updateFieldValueInput('selectGarment', target);
      }
    },
    selectOrderStatus: {
      id: 'status',
      value: '',
      label: "Select Status",
      required: false,
      placeholder: "ex: In Process",
      class: 'w-72 h-10',
      options: CONST_OrderStatusSelectOptions,
      callback: (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.updateFieldValueInput('selectStatus', target);
      }
    },
    btnTimeToday: {
      label: "Today",
      sizeW: CONST_SizeWElementConstant.MD,
      sizeH: CONST_SizeHElementConstant.MD,
      callback: (event: MouseEvent) => this.handleTimeFilter('today')
    },
    btnTimeWeek: {
      label: "Week",
      sizeW: CONST_SizeWElementConstant.MD,
      sizeH: CONST_SizeHElementConstant.MD,
      callback: (event: MouseEvent) => this.handleTimeFilter('week')
    },
    btnTimeMonth: {
      label: "Month",
      sizeW: CONST_SizeWElementConstant.MD,
      sizeH: CONST_SizeHElementConstant.MD,
      callback: (event: MouseEvent) => this.handleTimeFilter('month')
    },
    btnStartSearch: {
      iconPosition: "left",
      icon: {
        name: 'search',
        class: 'w-6 h-6'
      },
      callback: (event: MouseEvent) => this.handleSearch()
    }
  });

  constructor(protected readonly http: HttpApiCore) {}

  get filterOrder(): OrderFilterUiInterface {
    return this.filterOrder$();
  }

  private handleTimeFilter(period: string) {
    switch (period) {
      case 'today':
        this.http.filterOrder({days: true});
        break;
      case 'week':
        this.http.filterOrder({week: true});
        break;
      case 'month':
        this.http.filterOrder({month: true});
        break;
      default:
        console.log('Error button onClick');
        break;
    }
  }

  private handleSearch() {
    const formatData = this.formatData();
    this.callFilterOrder(formatData);
  }

  private callFilterOrder(formatData: FilterOrderInterface) {
    this.http.filterOrder(formatData);
  }

  private formatData(): FilterOrderInterface {
    const currentData = this.filterOrder$();

    return {
      orderRef: currentData.searchInputConfig.value || undefined,
      garmentType: currentData.selectGarmentPossibilities.value || undefined,
      status: currentData.selectOrderStatus.value || undefined
    };
  }

  private updateFieldValueInput(elementChange: string, target: HTMLInputElement) {
    switch (elementChange) {
      case 'searchInput':
        this.filterOrder$.update(current => ({
          ...current,
          searchInputConfig: {
            ...current.searchInputConfig,
            value: target.value
          }
        }));
        break;
      case 'selectGarment':
        this.filterOrder$.update(current => ({
          ...current,
          selectGarmentPossibilities: {
            ...current.selectGarmentPossibilities,
            value: target.value
          }
        }));
        break;
      case 'selectStatus':
        this.filterOrder$.update(current => ({
          ...current,
          selectOrderStatus: {
            ...current.selectOrderStatus,
            value: target.value
          }
        }));
        break;
      default:
        break;
    }
  }
}
