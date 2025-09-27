import {effect, Injectable, signal} from '@angular/core';
import {AuthSessionInterface, CustomerOrderInterface, PagedData} from '@interfaces';
import {CONST_UserRole, EXAMPLE_customerOrdersData} from '@constants';
import {RouteNavigator} from '@utils';

@Injectable({providedIn: 'root'})
export class StoreHandlerSignals {

  private readonly Const_store = {
    ORDERS_DATA: 'ordersPagedData',
    MESSAGE_UI: 'messageUI',
    AUTH_SESSION: 'authSession',
  };

  private readonly authSession$ = signal<AuthSessionInterface>(
    this.getFromStorage(this.Const_store.AUTH_SESSION, {
      role: CONST_UserRole.Admin,
      firstName: '',
      lastName: '',
    })
  );

  private readonly messageUi$ = signal<string>(
    this.getFromStorage(this.Const_store.MESSAGE_UI, '')
  );

  private readonly ordersDatas$ = signal<PagedData<CustomerOrderInterface>>(
    this.getFromStorage(this.Const_store.ORDERS_DATA, {
      data: EXAMPLE_customerOrdersData,
      totalCount: EXAMPLE_customerOrdersData.length,
      page: 1,
      pageSize: 10
    })
  );

  constructor(protected router: RouteNavigator) {
    effect(() => {
      if (this.authSession$().firstName !== '' && this.authSession$().lastName !== '') {
        router.goTo('/dashboard');
      }
    });
  }

  private getFromStorage<T>(key: string, defaultValue: T): T {
    try {
      const sessionValue = sessionStorage.getItem(key);
      if (sessionValue) {
        return JSON.parse(sessionValue);
      }

      const localValue = localStorage.getItem(key);
      if (localValue) {
        return JSON.parse(localValue);
      }

      return defaultValue;
    } catch (error) {
      console.warn(`Erreur lors de la lecture du storage pour ${key}:`, error);
      return defaultValue;
    }
  }

  private saveToStorage(key: string, value: any, useSessionStorage: boolean = true): void {
    try {
      const stringValue = JSON.stringify(value);
      if (useSessionStorage) {
        sessionStorage.setItem(key, stringValue);
      } else {
        localStorage.setItem(key, stringValue);
      }
    } catch (error) {
      console.warn(`Erreur lors de la sauvegarde dans le storage pour ${key}:`, error);
    }
  }

  // GETTERS

  get authSession(): AuthSessionInterface {
    return this.authSession$();
  }

  get messageUi(): string {
    return this.messageUi$();
  }

  get ordersDatas(): PagedData<CustomerOrderInterface> {
    return this.ordersDatas$();
  }

  // SETTERS

  setAuthSession(authSessionInterface: AuthSessionInterface): void {
    this.saveToStorage(this.Const_store.AUTH_SESSION, authSessionInterface, true);
    this.authSession$.set(authSessionInterface);
  }

  setMessageUi(message: string): void {
    this.saveToStorage(this.Const_store.MESSAGE_UI, message, false);
    this.messageUi$.set(message);
  }

  setOrdersDatas(ordersDatas: PagedData<CustomerOrderInterface>): void {
    this.saveToStorage(this.Const_store.ORDERS_DATA, ordersDatas, true);
    this.ordersDatas$.set(ordersDatas);
  }

  // MÉTHODES UTILITAIRES

  clearAuthSession(): void {
    sessionStorage.removeItem(this.Const_store.AUTH_SESSION);
    this.authSession$.set({
      role: CONST_UserRole.Admin,
      firstName: '',
      lastName: '',
    });
  }

  clearAllStorage(): void {
    Object.values(this.Const_store).forEach(key => {
      sessionStorage.removeItem(key);
      localStorage.removeItem(key);
    });

    this.authSession$.set({
      role: CONST_UserRole.Admin,
      firstName: '',
      lastName: '',
    });
    this.messageUi$.set('');
    this.ordersDatas$.set({
      data: EXAMPLE_customerOrdersData,
      totalCount: EXAMPLE_customerOrdersData.length,
      page: 1,
      pageSize: 10
    });
  }

  get isAuthenticated(): boolean {
    const auth = this.authSession$();
    return auth.firstName !== '' && auth.lastName !== '';
  }
}
