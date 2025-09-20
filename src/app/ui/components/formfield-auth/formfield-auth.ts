import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormfieldAuthUiInterface} from '@interfaces';
import {ButtonUi} from '../button-ui/button-ui';
import {IntpusUi} from '../intpus-ui/intpus-ui';
import {AuthType} from '@enums';
import {SelectUi} from '../select-ui/select-ui';

@Component({
  selector: 'formfield-auth',
  imports: [CommonModule, ButtonUi, IntpusUi, SelectUi],
  template: `
    <div class="mt-8">
      <div class="space-y-6">
        @for (field of formFieldAuth.inputfieldAuth; track field.label; let i = $index) {
          <intpus-ui [input]="field"/>
        }
        @if (this.formFieldAuth.selectUserType) {
          <div class="mt-6">
            <select-ui [selectUi]="this.formFieldAuth.selectUserType"/>
          </div>
        }
      </div>
      <div class="mt-8">
        <button-ui [config]="formFieldAuth.btnAuth"/>
      </div>
      <div class="mt-6 text-center">
        <div class="flex items-center justify-center gap-2">
          <p class="text-sm text-gray-600">
            {{ formFieldAuth.currentTypeAuth === 'login' ? "Pas encore de compte ?" : "Déjà un compte ?" }}
          </p>
          @if (formFieldAuth.signInButton) {
            <button-ui [config]="formFieldAuth.signInButton"/>
          }
        </div>
      </div>
    </div>
  `,
})
export class FormfieldAuth {
  @Input({required: true}) formFieldAuth: FormfieldAuthUiInterface = {
    currentTypeAuth: AuthType.REGISTER,
    btnAuth: {
      label: '',
      loading: false,
      callback: function (event: MouseEvent): void {
        throw new Error("Function not implemented.");
      }
    },
    inputfieldAuth: [],
    signInButton: {
      label: '',
      loading: false,
      callback: function (event: MouseEvent): void {
        throw new Error("Function not implemented.");
      }
    }
  };
}
