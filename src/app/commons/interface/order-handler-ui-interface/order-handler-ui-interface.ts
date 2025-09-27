import {OrderFilterUiInterface, OrderHeaderUiInterface, PagedData, TabsDataUiInterface} from '@interfaces';

export interface OrderHandlerUiInterface<T> {
  headerOrder : OrderHeaderUiInterface,
  filterOrder:OrderFilterUiInterface,
  tabs:TabsDataUiInterface,
  pagination : PagedData<T>
}
