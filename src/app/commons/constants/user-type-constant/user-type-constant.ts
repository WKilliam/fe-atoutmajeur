import {SelectUiOptionsInterface} from '@interfaces';

export const CONST_UserRole = {
  User : 'User',
  Admin: 'Admin'
}

export const CONST_UserType = {
  USER: { value: 'USER', label: CONST_UserRole.User },
  ADMIN: { value: 'ADMIN', label: CONST_UserRole.Admin }
} as const;

export const CONST_UserTypeSelectOptions: SelectUiOptionsInterface[] = [
  { value: 'USER', label: CONST_UserType.USER.label },
  { value: 'ADMIN', label: CONST_UserType.ADMIN.label }
];
