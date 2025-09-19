import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonUiInterface} from '@interfaces';
import {IconUi} from '../icons-ui/icons-ui';

@Component({
  selector: 'button-ui',
  imports: [
    IconUi
  ],
  template:`
    <button
      [class]="getButtonClasses()"
      [disabled]="config.disabled"
      (click)="onClick($event)">
      @if (config.loading) {
        <span class="animate-spin">⏳</span>
      }
      @if (config.icon && config.iconPosition === 'left') {
        <icon-ui [icon]="config.icon"></icon-ui>
      }
      @if (config.label) {
        <span>{{ config.label }}</span>
      }
      @if (config.icon && config.iconPosition === 'right') {
        <icon-ui [icon]="config.icon"></icon-ui>
      }
    </button>
  `,
})
export class ButtonUi {
  @Input({required:true}) config: ButtonUiInterface = {label: 'Button'};

  @Output() handlerOnClick = new EventEmitter();

  getButtonClasses(): string {
    const baseClasses = 'rounded-lg font-medium transition-colors flex items-center space-x-2';

    const variantClasses = {
      primary: 'bg-primary hover:bg-secondary text-light',
      secondary: 'bg-secondary hover:bg-primary text-dark',
      outline: 'border border-primary text-primary hover:bg-primary hover:text-light',
      ghost: 'text-primary hover:bg-accent',
      danger: 'bg-error hover:bg-error text-light opacity-90 hover:opacity-100',
      sidebarActif: 'bg-blue-500 text-white hover:bg-blue-600 w-full',
      sidebarInactif: 'text-gray-700 hover:bg-gray-100 w-full'
    };

    // Width classes
    const sizeWClasses = {
      auto: 'w-auto',
      full: 'w-full',
      fit: 'w-fit',
      xs: 'w-16',
      sm: 'w-20',
      md: 'w-24',
      lg: 'w-32',
      xl: 'w-40'
    };

    // Height classes (padding vertical)
    const sizeHClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    };

    // Text alignment classes
    const textAlignClasses = {
      left: 'justify-start text-left',
      center: 'justify-center text-center',
      right: 'justify-end text-right'
    };

    return [
      baseClasses,
      variantClasses[this.config.variant || 'primary'],
      sizeWClasses[this.config.sizeW || 'auto'],
      sizeHClasses[this.config.sizeH || 'md'],
      textAlignClasses[this.config.textAlign || 'center']
    ].join(' ');
  }

  onClick(event: MouseEvent): void {
    if (this.config.disabled || this.config.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.handlerOnClick.emit(event);
  }
}
