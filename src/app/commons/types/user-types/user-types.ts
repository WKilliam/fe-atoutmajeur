import {CONST_UserType} from '@constants';

export type TYPE_User = typeof CONST_UserType[keyof typeof CONST_UserType]['value'];
