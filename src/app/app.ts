import { Component, signal } from '@angular/core';
import {Dashboard} from '@ui-views';

@Component({
  selector: 'app-root',
  imports: [
    Dashboard
  ],
  template:`
    <dashboard-view/>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fe-atoutmajeur');
}
