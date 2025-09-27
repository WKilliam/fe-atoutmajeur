import { Component } from '@angular/core';
import {Layouts} from '../../ui/layouts/layouts';
import {CONST_Layouts} from '@constants';

@Component({
  selector: 'dashboard-features',
  imports: [
    Layouts
  ],
  template:`
    <layouts [layoutsType]="CONST_Layouts.DASHBOARD"/>
  `
})
export class DashboardFeatures {

  protected readonly CONST_Layouts = CONST_Layouts;
}
