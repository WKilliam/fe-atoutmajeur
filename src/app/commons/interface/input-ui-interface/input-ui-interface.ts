export interface InputUiInterface {
  placeholder?: string;
  type: 'text' | 'email' | 'password' | 'number';
  class?: string;
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  label: string;
  required:boolean
  errorMessage:string
}
