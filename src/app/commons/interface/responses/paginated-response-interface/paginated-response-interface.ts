import {PagedData,ResponseInterface} from '@interfaces';

export interface PagedResult<T> extends ResponseInterface{
  data: PagedData<T>;
}
