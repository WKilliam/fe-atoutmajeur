import {TYPE_User} from '@types';

export interface RegisterInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: TYPE_User;
}
