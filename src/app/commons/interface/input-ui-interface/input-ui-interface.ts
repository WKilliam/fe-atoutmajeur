export interface InputUiInterface {
  id:string
  placeholder?: string;
  type: 'text' | 'email' | 'password' | 'number';
  class?: string;
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  label: string;
  required: boolean
  value: string
  errorMessage: string
  callback: (event: Event) => void;
}
