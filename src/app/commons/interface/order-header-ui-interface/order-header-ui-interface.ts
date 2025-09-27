import {ButtonUiInterface} from '../button-ui-interface/button-ui-interface';
import {ModalUiInterface} from '../modal-ui-interface/modal-ui-interface';

export interface OrderHeaderUiInterface{
  title:string
  description:string
  btn?:ButtonUiInterface
  modal?:ModalUiInterface
}
