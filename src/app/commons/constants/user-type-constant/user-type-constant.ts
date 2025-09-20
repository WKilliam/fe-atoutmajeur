import {SelectUiOptionsInterface} from '@interfaces';

export const CONST_UserType = {
  USER: { value: 'USER', label: 'User' },
  ADMIN: { value: 'ADMIN', label: 'Administrator' }
} as const;

export const CONST_UserTypeSelectOptions: SelectUiOptionsInterface[] = [
  { value: 'USER', label: CONST_UserType.USER.label },
  { value: 'ADMIN', label: CONST_UserType.ADMIN.label }
];
