import {SelectUiOptionsInterface} from '@interfaces';

export interface SelectUiInterface {
  id:string;
  options: SelectUiOptionsInterface[];
  placeholder?: string;
  disabled?: boolean;
  multiple?: boolean;
  class?: string;
  label?: string;
  required:boolean
  value: string,
  callback: (event: Event) => void;
}
