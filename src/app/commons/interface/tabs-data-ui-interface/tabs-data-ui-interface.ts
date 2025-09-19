import {ButtonUiInterface, CustomerOrderInterface, TabsDataElementUiInterface} from '@interfaces';

export interface TabsDataUiInterface {
  columns: TabsDataElementUiInterface[];
  data: CustomerOrderInterface[];
  showActions?: boolean;
  striped?: boolean;
  bordered?: boolean;
  btnItems: ButtonUiInterface;
}
