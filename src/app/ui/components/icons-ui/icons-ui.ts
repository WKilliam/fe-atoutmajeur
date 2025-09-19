import {Component, Input} from '@angular/core';
import {LucideAngularModule,} from 'lucide-angular';
import {IconsUiInterfaces} from '@interfaces';
import {CONST_LucideIconRecord} from '@constants';

@Component({
  selector: 'icon-ui',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <lucide-icon
      [name]="CONST_LucideIconRecord[this.icon.name]"
      [class]="this.icon.class || 'w-5 h-5'"
      [style.color]="this.icon.color || 'currentColor'">
    </lucide-icon>
  `
})
export class IconUi{
  @Input() icon: IconsUiInterfaces = {name: 'default'};
  protected readonly CONST_LucideIconRecord = CONST_LucideIconRecord;
}
