import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderHeaderUiInterface} from '@interfaces';
import {ButtonUi} from '../button-ui/button-ui';

@Component({
  selector: 'header-order-ui',
  imports: [
    ButtonUi
  ],
  template: `
    <div class="px-6 py-4">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-3xl font-bold text-dark">{{this.headerOrder.title}}</p>
          <p class="text-sm text-dark opacity-60 mt-1">{{this.headerOrder.description}}</p>
        </div>
        <button-ui [config]="this.headerOrder.btn" (handlerOnClick)="this.onButtonClicked($event)"></button-ui>
      </div>
    </div>
  `,
})
export class HeaderOrderHandlerUi {
  @Input({required: true}) headerOrder: OrderHeaderUiInterface = {
    btn: {
      label: ""
    },
    description: '',
    title: ''
  }

  @Output() headerOnClickButton = new EventEmitter();

  onButtonClicked(event: MouseEvent){
    this.headerOnClickButton.emit(event);
  }
}
