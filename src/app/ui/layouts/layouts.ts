import {Component, Input} from '@angular/core';
import {TYPE_Layout} from '@types';
import {Dashboard} from '@ui-views';
import {CONST_Layouts} from '@constants'
import {Auth} from '../views/auth/auth';

@Component({
  selector: 'layouts',
  imports: [
    Dashboard,
    Auth
  ],
  template: `
    @switch (layoutsType) {
      @case (CONST_Layouts.DASHBOARD) {
        <div class="flex w-full h-screen">
          <dashboard-view class="flex-1"/>
        </div>
      }
      @case (CONST_Layouts.AUTH) {
        <div class="flex w-full h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <auth-wiew/>
        </div>
      }
    }
  `,
})
export class Layouts {
  @Input({required: true}) layoutsType: TYPE_Layout = CONST_Layouts.DASHBOARD;
  protected readonly CONST_Layouts = CONST_Layouts;
}
