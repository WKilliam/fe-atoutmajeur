import { Component } from '@angular/core';
import {Layouts} from '../../ui/layouts/layouts';
import {CONST_Layouts} from '@constants';

@Component({
  selector: 'auth-features',
  imports: [
    Layouts,
  ],
  template:`
    <layouts [layoutsType]="CONST_Layouts.AUTH"/>
  `
})
export class AuthFeatures {

  protected readonly CONST_Layouts = CONST_Layouts;
}
