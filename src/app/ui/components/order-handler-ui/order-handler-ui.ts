import {Component, Input} from '@angular/core';
import {HeaderOrderHandlerUi,TabsDataUi} from '@ui-component';
import {FilterOrderUi} from '../filter-order-ui/filter-order-ui';
import {
  OrderHandlerUiInterface
} from '@interfaces';

@Component({
  selector: 'order-handler-ui',
  imports: [HeaderOrderHandlerUi, FilterOrderUi, TabsDataUi],
  template: `
    <div class="bg-light shadow-sm border-b border-accent">
      <header-order-handler-ui
        [headerOrder]="this.orderHandler.headerOrder"
      />
      <filter-order-ui [filterOrder]="this.orderHandler.filterOrder"/>
      <tabs-data-ui />
    </div>
  `,
})
export class OrderHandlerUi {
  @Input({required:true}) orderHandler : OrderHandlerUiInterface = {
    tabs: '',
    headerOrder: {
      title: "",
      description: "",
      btn: {
        label: ""
      }
    },
    filterOrder:{}
  }
}
