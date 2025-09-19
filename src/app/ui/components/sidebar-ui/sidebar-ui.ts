import {Component, Input} from '@angular/core';
import {SidebarUiInterface} from '@interfaces';
import {LucideAngularModule} from 'lucide-angular';
import {IconUi} from '../icons-ui/icons-ui';

@Component({
  selector: 'sidebar-ui',
  imports: [
    LucideAngularModule,
    IconUi
  ],
  template: `
    <aside class="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg overflow-y-auto border-r border-gray-200">
      <!-- Header -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <icon-ui [icon]="{name:'droplets',class:'w-5 h-5 text-white'}"/>
          </div>
          <div>
            <h1 class="font-bold text-gray-800">{{ sidebar.header.title }}</h1>
            <p class="text-sm text-gray-500">{{ sidebar.header.subtitle }}</p>
          </div>
        </div>
      </div>

      <!-- Menu -->
      <nav class="p-4">
        @for (item of sidebar.menuItems; track item.id) {
          <div class="mb-4">
            <!-- Item principal -->
            <button
              (click)="onClick(item)"
              [class]="item.isActive
        ? 'flex items-center space-x-3 px-3 py-2 bg-blue-500 text-white rounded-lg transition-all duration-200 w-full text-left'
        : 'flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 w-full text-left'">
              @if (item.icon) {
                <icon-ui [icon]="item.icon"/>
              }
              <span>{{ item.label }}</span>
            </button>
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

  onClick(item: any) {
    console.log("SidebarUi clicked:", item.label);
    // Tu peux ajouter ta logique de navigation ici
  }
}
