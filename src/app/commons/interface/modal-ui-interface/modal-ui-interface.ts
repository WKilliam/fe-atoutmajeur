import {ButtonUiInterface} from '../button-ui-interface/button-ui-interface';
import {TYPE_SizeH} from '@types';
import {InputUiInterface} from '../input-ui-interface/input-ui-interface';

export interface ModalUiInterface {
  isOpen: boolean;
  title: string;
  contentText?:  string;
  contentInput?: InputUiInterface[];
  btnOptions:ButtonUiInterface[]
  size?: TYPE_SizeH;
  closable?: boolean;
  closeOnOverlay?: boolean;
  customClass?: string;
  btnCloseButton: ButtonUiInterface
}
