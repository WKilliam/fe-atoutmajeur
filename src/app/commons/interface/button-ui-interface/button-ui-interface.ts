export interface ButtonUiInterface {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  iconPosition?: 'left' | 'right';
  icon?: string;
  disabled?: boolean;
  loading?: boolean;
}
