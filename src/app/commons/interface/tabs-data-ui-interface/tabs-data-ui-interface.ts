import {ButtonUiInterface, CustomerOrderInterface, ModalUiInterface, TabsDataElementUiInterface} from '@interfaces';

export interface TabsDataUiInterface {
  columns: TabsDataElementUiInterface[];
  data: CustomerOrderInterface[];
  showActions?: boolean;
  striped?: boolean;
  bordered?: boolean;
  btnChange?: ButtonUiInterface;
  btnComments: ButtonUiInterface;
  modal:ModalUiInterface
}
