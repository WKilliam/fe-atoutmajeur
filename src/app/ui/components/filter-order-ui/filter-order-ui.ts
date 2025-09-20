import {Component,Input} from '@angular/core';
import {OrderFilterUiInterface} from '@interfaces';
import {SelectUi} from '../select-ui/select-ui';
import {IntpusUi} from '../intpus-ui/intpus-ui';
import {ButtonUi} from '../button-ui/button-ui';

@Component({
  selector: 'filter-order-ui',
  imports: [
    IntpusUi,
    SelectUi,
    ButtonUi
  ],
  template: `
    <!-- Solution 1: Forcer l'alignement en bas -->
    <div class="flex items-end space-x-4 p-6">
      <intpus-ui
        [input]="filterOrder.searchInputConfig"
      ></intpus-ui>

      <select-ui
        [selectUi]="filterOrder.selectGarmentPossibilities"
      ></select-ui>

      <select-ui
        [selectUi]="filterOrder.selectOrderStatus"
      ></select-ui>

      <button-ui
        [config]="filterOrder.btnStartSearch"
      ></button-ui>
    </div>

    <!-- Quick Filters Section -->
    <div class="space-y-2 pl-6 pr-6 pb-6">
      <label class="text-sm font-medium text-dark">Quick Filters : </label>
      <div class="flex flex-wrap gap-2">
        <button-ui
          [config]="filterOrder.btnTimeToday"
        ></button-ui>

        <button-ui
          [config]="filterOrder.btnTimeWeek"
        ></button-ui>

        <button-ui
          [config]="filterOrder.btnTimeMonth"
        ></button-ui>
      </div>
    </div>
  `,
})
export class FilterOrderUi {
  @Input({required: true}) filterOrder: OrderFilterUiInterface = {
    selectGarmentPossibilities: {
      options: [],
      required: false,
      callback: function (event: Event): void {
        throw new Error("Function not implemented.");
      }
    },
    searchInputConfig: {
      type: "number",
      label: "",
      required: false,
      errorMessage: "",
      callback: function (event: Event): void {
        throw new Error("Function not implemented.");
      }
    },
    btnStartSearch: {
      label: "",
      callback: function (event: MouseEvent): void {
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
    }
  }
}
