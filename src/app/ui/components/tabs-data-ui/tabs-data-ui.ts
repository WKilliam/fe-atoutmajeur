import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonUiInterface, TabsDataUiInterface} from '@interfaces';
import {ButtonUi} from '../button-ui/button-ui';

@Component({
  selector: 'tabs-data-ui',
  imports: [
    ButtonUi
  ],
  standalone: true,
  template:`
    <div class="overflow-x-auto">
      <table [class]="getTableClasses()">
        <!-- Header -->
        <thead class="bg-accent">
        <tr>
          @for (column of config.columns; track column.key) {
            <th class="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              {{ column.label }}
            </th>
          }
          @if (config.showActions) {
            <th class="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              Actions
            </th>
          }
        </tr>
        </thead>

        <!-- Body -->
        <tbody [class]="getBodyClasses()">
          @for (row of config.data; track $index; let isEven = $even) {
            <tr [class]="getRowClasses(isEven)">
              @for (column of config.columns; track column.key) {
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark">
                  {{ getCellValue(row, column.key) }}
                </td>
              }
              @if (config.showActions) {
                <td class="px-6 py-4 whitespace-nowrap text-sm text-dark">
                  <div class="flex space-x-2">
                    <!--                    <button class="text-primary hover:text-secondary">Order</button>-->
                    <button-ui [config]="this.config.btnItems" (handlerOnClick)="onRowClick(row.id)"></button-ui>
                  </div>
                </td>
              }
            </tr>
          }
        </tbody>
      </table>

      <!-- Empty State -->
      @if (config.data.length === 0) {
        <div class="text-center py-12">
          <p class="text-dark opacity-60">No data available</p>
        </div>
      }
    </div>
  `
})
export class TabsDataUi {
  @Input({required: true}) config: TabsDataUiInterface = {
    btnItems: {},
    columns: [],
    data: [],
    showActions: false,
    striped: true,
    bordered: true
  };

  @Output() handlerOnClick = new EventEmitter();

  getTableClasses(): string {
    const baseClasses = 'min-w-full divide-y divide-accent';
    const borderedClass = this.config.bordered ? 'border border-accent' : '';
    return `${baseClasses} ${borderedClass}`.trim();
  }

  getBodyClasses(): string {
    return 'bg-light divide-y divide-accent';
  }

  getRowClasses(isEven: boolean): string {
    const baseClasses = 'hover:bg-accent transition-colors';
    const stripedClass = this.config.striped && isEven ? 'bg-accent bg-opacity-50' : '';
    return `${baseClasses} ${stripedClass}`.trim();
  }
  getCellValue(row: any, key: string): string {
    const value = row[key];

    // Formatage spécifique selon le type de données
    if (key === 'totalPrice' && typeof value === 'number') {
      return `${value.toFixed(2)}€`;
    }

    if (key === 'date' && value) {
      // Formatage de date si nécessaire
      return new Date(value).toLocaleDateString('fr-FR');
    }
    return value?.toString() || '';
  }

  onRowClick(itemId:number) {
    this.handlerOnClick.emit(itemId);
  }

}
