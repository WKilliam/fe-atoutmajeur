import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonUiInterface, TabsDataUiInterface} from '@interfaces';
import {ButtonUi} from '../button-ui/button-ui';
import {ModalUi} from '../modal-ui/modal-ui';

@Component({
  selector: 'tabs-data-ui',
  imports: [
    ButtonUi,
    ModalUi
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
                    <button-ui [config]="this.config.btnItems"></button-ui>
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
      <modal-ui [modal]="config.modal"></modal-ui>
    </div>
  `
})
export class TabsDataUi {
  @Input({required: true}) config: TabsDataUiInterface = {
    modal: {
      isOpen: false,
      title: "",
      btnOptions: [],
      btnCloseButton: {
        callback: function (event: MouseEvent): void {
          throw new Error("Function not implemented.");
        }
      }
    },
    btnItems: {
      callback: function (event: MouseEvent): void {
        throw new Error("Function not implemented.");
      }
    },
    columns: [],
    data: [],
    showActions: false,
    striped: true,
    bordered: true
  };

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

}
