import {Component, inject} from '@angular/core';
import {FormfieldAuth} from '../../components/formfield-auth/formfield-auth';
import {AuthSignals} from '../../../core/signals/globals/ui/views/auth-signals/auth-signals';

@Component({
  selector: 'auth-wiew',
  imports: [
    FormfieldAuth
  ],
  template: `
    <div class="min-h-screen from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div class="max-w-md w-full">
        <!-- Auth Form Container -->
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <p class="text-4xl font-bold text-gray-900">Cloth Clear laundry</p>
          <p class="text-gray-600 mt-2">Your trusted dry cleaner</p>
          @if (this.authSignals.getCurrentAuthType() === 'register') {
            <formfield-auth [formFieldAuth]="this.authSignals.getFormFieldAuthRegister()"></formfield-auth>
          } @else {
            <formfield-auth [formFieldAuth]="this.authSignals.getFormFieldAuthLogin()"></formfield-auth>
          }
        </div>

      </div>
    </div>
  `,
})
export class Auth {
  protected readonly authSignals = inject(AuthSignals);
}
