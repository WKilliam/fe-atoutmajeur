import {Component, Input} from '@angular/core';
import {SelectUiInterface} from '@interfaces';

@Component({
  selector: 'select-ui',
  imports: [],
  template:`
    <!-- Label au-dessus (optionnel) -->
    @if (selectUi.label) {
      <label [for]="selectId" class="block text-sm font-medium text-dark mb-1">
        {{ selectUi.label }}
        @if (selectUi.required) {
          <span class="text-error">*</span>
        }
      </label>
    }

    <!-- Select -->
    <select
      [id]="selectId"
      [multiple]="selectUi.multiple"
      [disabled]="selectUi.disabled"
      [class]="getSelectClasses()"
      (change)="this.selectUi.callback($event)"
    >
      <!-- Placeholder à l'intérieur du select -->
      @if (selectUi.placeholder && !selectUi.multiple) {
        <option value="" disabled selected>{{ selectUi.placeholder }}</option>
      }

      <!-- Options -->
      @for (option of selectUi.options; track option.value) {
        <option
          [value]="option.value"
          [disabled]="option.disabled"
        >
          {{ option.label }}
        </option>
      }
    </select>
  `
})
export class SelectUi {
  @Input({required:true}) selectUi : SelectUiInterface = {
    class: '',
    disabled: false,
    multiple: false,
    options: [],
    placeholder: '',
    label: '',
    required: false,
    callback(event: Event): void {
      throw new Error("Function not implemented.");
    },
  };

  // ID unique pour lier le label au select
  selectId = `select-${Math.random().toString(36).substr(2, 9)}`;

  getSelectClasses(): string {
    const baseClasses = 'px-3 py-2 border border-accent rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary text-dark bg-light';
    const disabledClass = this.selectUi.disabled ? 'opacity-50 cursor-not-allowed' : '';
    const customClass = this.selectUi.class || '';

    return `${baseClasses} ${disabledClass} ${customClass}`.trim();
  }
}
