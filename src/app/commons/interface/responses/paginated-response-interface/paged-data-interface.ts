export interface PagedData<T> {
  data?: T[];
  totalCount: number;
  page: number;
  pageSize: number;
}
