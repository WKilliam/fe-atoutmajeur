import {ButtonUiInterface, InputUiInterface, SelectUiInterface} from '@interfaces';
import {AuthType} from '@enums';

export interface FormfieldAuthUiInterface {
  inputfieldAuth: InputUiInterface[],
  btnAuth: ButtonUiInterface
  signInButton?: ButtonUiInterface
  currentTypeAuth:AuthType
  selectUserType?:SelectUiInterface,
}
