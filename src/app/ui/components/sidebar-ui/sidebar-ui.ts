import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SidebarMenuInterface, SidebarUiInterface} from '@interfaces';
import {LucideAngularModule} from 'lucide-angular';
import {IconUi} from '../icons-ui/icons-ui';
import {ButtonUi} from '../button-ui/button-ui';

@Component({
  selector: 'sidebar-ui',
  imports: [
    LucideAngularModule,
    IconUi,
    ButtonUi
  ],
  template: `
    <aside class="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg overflow-y-auto border-r border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <icon-ui [icon]="{name:'droplets',class:'w-5 h-5 text-white'}"/>
          </div>
          <div>
            <p class="font-bold text-gray-800">{{ sidebar.header.title }}</p>
            <p class="text-sm text-gray-500">{{ sidebar.header.subtitle }}</p>
          </div>
        </div>
      </div>
      <nav class="p-4">
        @for (item of sidebar.menuItems; track item.id) {
          <div class="mb-2">
            <button-ui
              [config]="item.button"
            ></button-ui>
          </div>
        }
      </nav>
    </aside>
  `,
})
export class SidebarUi {
  @Input({required: true}) sidebar: SidebarUiInterface = {
    collapsed: false,
    header: {
      title: ""
    },
    menuItems: []
  }
}
