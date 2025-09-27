import {Injectable, signal} from '@angular/core';
import {PagedData} from '@interfaces';

@Injectable({providedIn: 'root'})
export class PaginationSignals {
  private readonly pagignation$ = signal<PagedData<any>>({
    page: 0,
    pageSize: 0,
    totalCount: 0
  })

  get paging() : PagedData<any>{
    return this.pagignation$()
  }
}
