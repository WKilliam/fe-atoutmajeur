import {InputUiInterface, SelectUiInterface} from '@interfaces';
import {ButtonUiInterface} from '../button-ui-interface/button-ui-interface';

export interface OrderFilterUiInterface {
  searchInputConfig:InputUiInterface
  selectGarmentPossibilities:SelectUiInterface
  selectOrderStatus:SelectUiInterface
  btnTimeToday:ButtonUiInterface
  btnTimeWeek:ButtonUiInterface
  btnTimeMonth:ButtonUiInterface
  btnStartSearch:ButtonUiInterface,
}
