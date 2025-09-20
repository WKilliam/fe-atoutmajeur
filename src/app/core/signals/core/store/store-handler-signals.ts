import {Injectable,signal} from '@angular/core';
import {AuthSessionInterface} from '@interfaces';
import {CONST_UserType} from '@constants';


@Injectable({providedIn: 'root'})
export class StoreHandlerSignals {
  private readonly authSession$ = signal<AuthSessionInterface>({
    role: CONST_UserType.USER.value,
    firstName: '',
    lastName: '',
  });


  setAuthSession(authResponse: AuthSessionInterface) {
    this.authSession$.set(authResponse);
    sessionStorage.setItem('authSession', JSON.stringify(authResponse));
  }

  getAuthSession() {
    return this.authSession$();
  }

  getUserRole() {
    return this.authSession$().role;
  }

}
