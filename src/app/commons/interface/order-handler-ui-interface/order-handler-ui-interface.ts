import { OrderFilterUiInterface, OrderHeaderUiInterface, TabsDataUiInterface} from '@interfaces';

export interface OrderHandlerUiInterface {
  headerOrder : OrderHeaderUiInterface,
  filterOrder:OrderFilterUiInterface,
  tabs:TabsDataUiInterface,
}
