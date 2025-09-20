import {Component, Input} from '@angular/core';
import {InputUiInterface} from '@interfaces';
import {IconUi} from '../icons-ui/icons-ui';

@Component({
  selector: 'intpus-ui',
  imports: [
    IconUi
  ],
  template: `
    <div class="flex-1 max-w-md">
      <!-- Label au-dessus (optionnel) -->
      @if (input.label) {
        <label [for]="inputId" class="block text-sm font-medium text-dark mb-1">
          {{ input.label }}
          @if (input.required) {
            <span class="text-error">*</span>
          }
        </label>
      }

      <!-- Input avec icônes -->
      <div class="relative">
        @if (input.icon && input.iconPosition === 'left') {
          <div class="absolute left-3 top-2.5">
            <icon-ui [icon]="{name: input.icon, class: 'w-4 h-4 text-dark opacity-60'}"></icon-ui>
          </div>
        }

        <input
          [id]="inputId"
          [type]="input.type"
          [placeholder]="input.placeholder"
          [disabled]="input.disabled"
          [required]="input.required"
          [class]="getInputClasses()"
          (input)="this.input.callback($event)"
        >

        @if (input.icon && input.iconPosition === 'right') {
          <div class="absolute right-3 top-2.5">
            <icon-ui [icon]="{name: input.icon, class: 'w-4 h-4 text-dark opacity-60'}"></icon-ui>
          </div>
        }
      </div>

      <!-- Message d'erreur optionnel -->
      @if (input.errorMessage) {
        <p class="mt-1 text-sm text-error">{{ input.errorMessage }}</p>
      }
    </div>
  `
})
export class IntpusUi {
  @Input({required: true}) input: InputUiInterface = {
    class: '',
    disabled: false,
    icon: '',
    iconPosition: "left",
    placeholder: '',
    type: 'text',
    label: '',
    required: false,
    errorMessage: '',
    callback(event: Event): void {
      throw new Error("Function not implemented.");
    },
  };

  inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  getInputClasses(): string {
    const baseClasses = 'w-full py-2 border border-accent rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-dark bg-light';
    const hasLeftIcon = this.input.icon && this.input.iconPosition === 'left';
    const hasRightIcon = this.input.icon && this.input.iconPosition === 'right';

    let padding = 'px-4';
    if (hasLeftIcon) padding = 'pl-10 pr-4';
    if (hasRightIcon) padding = 'pl-4 pr-10';

    const disabledClass = this.input.disabled ? 'opacity-50 cursor-not-allowed' : '';
    const errorClass = this.input.errorMessage ? 'border-error focus:border-error focus:ring-error' : '';
    const customClass = this.input.class || '';

    return `${baseClasses} ${padding} ${disabledClass} ${errorClass} ${customClass}`.trim();
  }
}
