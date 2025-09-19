import {OrderFilterUiInterface,OrderHeaderUiInterface} from '@interfaces';

export interface OrderHandlerUiInterface {
  headerOrder : OrderHeaderUiInterface,
  filterOrder:OrderFilterUiInterface,
  tabs:string,
}
