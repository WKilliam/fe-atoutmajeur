import {CONST_UserRole} from '@constants';

export type TYPE_User = typeof CONST_UserRole[keyof typeof CONST_UserRole];
