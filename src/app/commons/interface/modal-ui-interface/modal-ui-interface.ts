import {TYPE_SizeH} from '@types';
import {SelectUiInterface, InputUiInterface, ButtonUiInterface, CommentsInterface} from '@interfaces';

export interface ModalUiInterface {
  isOpen: boolean;
  title: string;
  contentText?:  string;
  contentInput?: InputUiInterface[];
  btnOptions?:ButtonUiInterface[]
  selectOptions?: SelectUiInterface[]
  size?: TYPE_SizeH;
  closable?: boolean;
  closeOnOverlay?: boolean;
  customClass?: string;
  btnCloseButton: ButtonUiInterface

  comments?: CommentsInterface[];
  allowAddComment?: boolean;
  orderId?: number;
  onAddComment?: (comment: CommentsInterface) => void;
}
