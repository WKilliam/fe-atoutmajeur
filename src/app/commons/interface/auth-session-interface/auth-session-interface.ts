import {TYPE_User} from '@types';

export interface AuthSessionInterface {
  role: TYPE_User,
  firstName: string,
  lastName: string,
}
