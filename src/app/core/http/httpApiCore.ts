import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TYPE_PathRequest} from '@types';
import {CONST_PathRequest} from '@constants';

@Injectable({providedIn: 'root'})
export class HttpApiCore {
  readonly httpClient: HttpClient = inject(HttpClient);
  private readonly paths: Record<TYPE_PathRequest, string> = {
    [CONST_PathRequest.REGISTER]: 'http://localhost:5041/auth/register',
    [CONST_PathRequest.LOGIN]: 'http://localhost:5041/auth/login',
    [CONST_PathRequest.ORDERS_CREATE]: 'http://localhost:5041/orders/create/',
    [CONST_PathRequest.ORDERS_ALL]: 'http://localhost:5041/orders/all/',
    [CONST_PathRequest.ORDER_UPDATE]: 'http://localhost:5041/orders/update/',
    [CONST_PathRequest.ORDER_DELETE]: 'http://localhost:5041/orders/delete/',
    [CONST_PathRequest.ORDER_HISTORRICAL]: 'http://localhost:5041/orders/history/',
  };
  getPath(pathKey: TYPE_PathRequest): string {
    return this.paths[pathKey];
  }
  getPathWithId(pathKey: TYPE_PathRequest, id: number): string {
    return `${this.paths[pathKey]}${id}`;
  }
}
