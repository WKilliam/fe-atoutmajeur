import {SelectUiOptionsInterface} from '@interfaces';

export interface SelectUiInterface {
  options: SelectUiOptionsInterface[];
  placeholder?: string;
  disabled?: boolean;
  multiple?: boolean;
  class?: string;
  label?: string;
  required:boolean
}
