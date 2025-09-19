import {Component, Input} from '@angular/core';
import {TYPE_Layout} from '@types';
import {Dashboard} from '@ui-views';
import {CONST_Layouts} from '@constants'

@Component({
  selector: 'layouts',
  imports: [
    Dashboard
  ],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss'
})
export class Layouts {
  @Input({required: true}) layoutsType: TYPE_Layout = CONST_Layouts.DASHBOARD;
  protected readonly CONST_Layouts = CONST_Layouts;
}
