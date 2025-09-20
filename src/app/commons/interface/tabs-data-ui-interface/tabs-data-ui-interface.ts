import {ButtonUiInterface, CustomerOrderInterface, ModalUiInterface, TabsDataElementUiInterface} from '@interfaces';

export interface TabsDataUiInterface {
  columns: TabsDataElementUiInterface[];
  data: CustomerOrderInterface[];
  showActions?: boolean;
  striped?: boolean;
  bordered?: boolean;
  btnItems: ButtonUiInterface;
  modal:ModalUiInterface
}
