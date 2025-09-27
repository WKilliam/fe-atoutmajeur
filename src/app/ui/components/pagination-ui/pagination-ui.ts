import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PagedData} from '@interfaces';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'pagination-ui',
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
      <!-- Info pagination -->
      <div class="flex items-center text-sm text-gray-700">
        <span>
          Affichage {{ startItem }} à {{ endItem }} sur {{ pagination.totalCount }} résultats
        </span>
      </div>

      <!-- Navigation pagination -->
      <div class="flex items-center space-x-2">
        <!-- Première page -->
        <button
          (click)="goToPage(1)"
          [disabled]="isFirstPage"
          [class]="buttonClass"
          [class.opacity-50]="isFirstPage"
          [class.cursor-not-allowed]="isFirstPage"
          title="Première page"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7M21 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Page précédente -->
        <button
          (click)="goToPage(pagination.page - 1)"
          [disabled]="isFirstPage"
          [class]="buttonClass"
          [class.opacity-50]="isFirstPage"
          [class.cursor-not-allowed]="isFirstPage"
          title="Page précédente"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Pages numériques -->
        <div class="flex items-center space-x-1">
          <button
            *ngFor="let page of visiblePages"
            (click)="goToPage(page)"
            [class]="page === pagination.page ? activeButtonClass : buttonClass"
            class="min-w-[2.5rem]"
          >
            {{ page }}
          </button>
        </div>

        <!-- Page suivante -->
        <button
          (click)="goToPage(pagination.page + 1)"
          [disabled]="isLastPage"
          [class]="buttonClass"
          [class.opacity-50]="isLastPage"
          [class.cursor-not-allowed]="isLastPage"
          title="Page suivante"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Dernière page -->
        <button
          (click)="goToPage(totalPages)"
          [disabled]="isLastPage"
          [class]="buttonClass"
          [class.opacity-50]="isLastPage"
          [class.cursor-not-allowed]="isLastPage"
          title="Dernière page"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M3 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <!-- Sélecteur taille de page -->
      <div class="flex items-center space-x-2 text-sm">
        <label for="pageSize" class="text-gray-700">Afficher :</label>
        <select
          id="pageSize"
          [value]="pagination.pageSize"
          (change)="changePageSize($event)"
          class="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span class="text-gray-700">par page</span>
      </div>
    </div>
  `
})
export class PaginationUi {
  @Input({required: true}) pagination: PagedData<any> = {
    page: 1,
    pageSize: 10,
    totalCount: 0
  };

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  // Classes CSS
  buttonClass = 'px-3 py-1 text-sm border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200';
  activeButtonClass = 'px-3 py-1 text-sm border border-blue-500 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200';

  // Propriétés calculées
  get totalPages(): number {
    return Math.ceil(this.pagination.totalCount / this.pagination.pageSize);
  }

  get isFirstPage(): boolean {
    return this.pagination.page <= 1;
  }

  get isLastPage(): boolean {
    return this.pagination.page >= this.totalPages;
  }

  get startItem(): number {
    return ((this.pagination.page - 1) * this.pagination.pageSize) + 1;
  }

  get endItem(): number {
    return Math.min(this.pagination.page * this.pagination.pageSize, this.pagination.totalCount);
  }

  // Pages visibles (max 5 pages autour de la page actuelle)
  get visiblePages(): number[] {
    const current = this.pagination.page;
    const total = this.totalPages;
    const maxVisible = 5;

    if (total <= maxVisible) {
      return Array.from({length: total}, (_, i) => i + 1);
    }

    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > total) {
      end = total;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }

  // Actions
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.pagination.page) {
      this.pageChange.emit(page);
    }
  }

  changePageSize(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newSize = parseInt(target.value);
    if (newSize !== this.pagination.pageSize) {
      this.pageSizeChange.emit(newSize);
    }
  }
}
