import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {ButtonUiInterface} from '../../../commons/interface/button-ui-interface/button-ui-interface';
import {IconUi} from '@ui-component';

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
        <icon-ui [icon]="{name: config.icon, class: 'w-4 h-4'}"></icon-ui>
      }
      <span>{{ config.label }}</span>
      @if (config.icon && config.iconPosition === 'right') {
        <icon-ui [icon]="{name: config.icon, class: 'w-4 h-4'}"></icon-ui>
      }
    </button>
  `,
  styleUrl: './button-ui.scss'
})
export class ButtonUi {
  @Input({required:true}) config: ButtonUiInterface = {label: 'Button'};

  @Output() handlerOnClick = new EventEmitter();

  getButtonClasses(): string {
    const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2';

    const variantClasses = {
      primary: 'bg-primary hover:bg-secondary text-light',
      secondary: 'bg-secondary hover:bg-primary text-dark',
      outline: 'border border-primary text-primary hover:bg-primary hover:text-light',
      ghost: 'text-primary hover:bg-accent',
      danger: 'bg-error hover:bg-error text-light opacity-90 hover:opacity-100'
    };

    const sizeClasses = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg'
    };

    return [
      baseClasses,
      variantClasses[this.config.variant || 'primary'],
      sizeClasses[this.config.size || 'md']
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
