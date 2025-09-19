import {Component, Input} from '@angular/core';
import {IconUi} from '@ui-component';
import {OrderFilterUiInterface} from '@interfaces';

@Component({
  selector: 'filter-order-ui',
  imports: [
    IconUi
  ],
  template:`
    <!-- Filter Section -->
    <div class="px-6 py-3 bg-accent border-t border-accent">
      <div class="flex items-center space-x-4">
        <!-- Search Bar -->
        <div class="flex-1 max-w-md">
          <div class="relative">
            <input
              type="text"
              placeholder="Search orders..."
              class="
              w-full pr-4 py-2
              border border-accent rounded-lg
              focus:ring-2 focus:ring-primary
              focus:border-primary text-dark bg-light"
            >
            <div class="absolute left-3 top-2.5">
              <icon-ui [icon]="{name: 'search', class: 'w-4 h-4 text-dark opacity-60'}"></icon-ui>
            </div>
          </div>
        </div>

        <!-- Filter Buttons -->
        <div class="flex items-center space-x-2">
          <!-- Status Filter -->
          <select class="px-3 py-2 border border-accent rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary text-dark bg-light">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="ready">Ready</option>
            <option value="completed">Completed</option>
          </select>

          <!-- Date Filter -->
          <input
            type="date"
            class="px-3 py-2 border border-accent rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary text-dark bg-light"
          >

          <!-- Clear Filters -->
          <button class="px-3 py-2 text-dark hover:text-primary hover:bg-light rounded-lg transition-colors">
            Clear
          </button>
        </div>
      </div>

      <!-- Quick Filters -->
      <div class="flex items-center space-x-2 mt-3">
        <span class="text-sm text-dark opacity-60">Quick filters:</span>
        <button class="px-3 py-1 bg-primary text-light text-sm rounded-full hover:bg-secondary transition-colors">
          Today
        </button>
        <button class="px-3 py-1 bg-accent text-dark text-sm rounded-full hover:bg-primary hover:text-light transition-colors">
          This Week
        </button>
        <button class="px-3 py-1 bg-accent text-dark text-sm rounded-full hover:bg-primary hover:text-light transition-colors">
          This Month
        </button>
      </div>
    </div>
  `,
})
export class FilterOrderUi {
  @Input({required:true}) filterOrder : OrderFilterUiInterface = {
  }
}
