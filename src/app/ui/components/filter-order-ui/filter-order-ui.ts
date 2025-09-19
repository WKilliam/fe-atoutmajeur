import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderFilterUiInterface} from '@interfaces';
import {SelectUi} from '../select-ui/select-ui';
import {TYPE_FilterChangeInfo, TYPE_ButtonClickInfo} from '@types';
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
        (inputChange)="onChangeSelectOrderStatus('input', $event)"
      ></intpus-ui>

      <select-ui
        [selectUi]="filterOrder.selectGarmentPossibilities"
        (selectionChange)="onChangeSelectOrderStatus('select garment possibilities', $event)"
      ></select-ui>

      <select-ui
        [selectUi]="filterOrder.selectOrderStatus"
        (selectionChange)="onChangeSelectOrderStatus('select status', $event)"
      ></select-ui>

      <button-ui
        [config]="filterOrder.btnStartSearch"
        (handlerOnClick)="onChangeDate('start search', $event)"
      ></button-ui>
    </div>

    <!-- Quick Filters Section -->
    <div class="space-y-2 pl-6 pr-6 pb-6">
      <label class="text-sm font-medium text-dark">Quick Filters : </label>
      <div class="flex flex-wrap gap-2">
        <button-ui
          [config]="filterOrder.btnTimeToday"
          (handlerOnClick)="onChangeDate('today', $event)"
        ></button-ui>

        <button-ui
          [config]="filterOrder.btnTimeWeek"
          (handlerOnClick)="onChangeDate('week', $event)"
        ></button-ui>

        <button-ui
          [config]="filterOrder.btnTimeMonth"
          (handlerOnClick)="onChangeDate('month', $event)"
        ></button-ui>
      </div>
    </div>
  `,
})
export class FilterOrderUi {
  @Input({required: true}) filterOrder: OrderFilterUiInterface = {
    selectGarmentPossibilities: {
      options: [],
      required: false
    },
    searchInputConfig: {
      type: "number",
      label: "",
      required: false,
      errorMessage: ""
    },
    btnStartSearch: {
      label: ""
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
    }
  }
  @Output() handlerSearchInputChanged = new EventEmitter();
  @Output() handlerSelectGarmentStatusChanged = new EventEmitter();
  @Output() handlerSelectOrderStatusChanged = new EventEmitter();
  @Output() handlerOnClickedStartSearchChanged = new EventEmitter();
  @Output() handlerOnClickedTodayChanged = new EventEmitter();
  @Output() handlerOnClickedWeekChanged = new EventEmitter();
  @Output() handlerOnClickedMouthChanged = new EventEmitter();

  onChangeSelectOrderStatus =
    (infoRef: TYPE_FilterChangeInfo, event: string | string[]) => {
    switch (infoRef) {
      case 'select status':
        this.handlerSelectOrderStatusChanged.emit(event);
        break
      case 'select garment possibilities':
        this.handlerSelectGarmentStatusChanged.emit(event);
        break
      case 'input':
        this.handlerSearchInputChanged.emit(event);
        break
      default:
        break
    }
  }
  onChangeDate = (infoRef: TYPE_ButtonClickInfo, event: string) => {
    switch (infoRef) {
      case 'start search':
        this.handlerOnClickedStartSearchChanged.emit(event);
        break
      case 'today':
        this.handlerOnClickedTodayChanged.emit(event);
        break
      case 'week':
        this.handlerOnClickedWeekChanged.emit(event);
        break
      case 'month':
        this.handlerOnClickedMouthChanged.emit(event);
        break
      default:
        break
    }
  }
}
