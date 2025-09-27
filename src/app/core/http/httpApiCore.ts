import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TYPE_PathRequest} from '@types';
import {CONST_PathRequest} from '@constants';
import {StoreHandlerSignals} from '../signals/core/store/store-handler-signals';
import {
  AuthSessionInterface, CreateOrderInterface,
  RegisterInterface, ErrorResponse, FilterOrderInterface, LoginInterface,
  OrderResponseInterface, PagedResult, SuccessResponse,
  UpdateOrdersInterface, CustomerOrderInterface, PagedData
} from '@interfaces';
import {SecurityServices} from '../security/security.services';

export type GetOrdersReturnType = SuccessResponse<PagedResult<CustomerOrderInterface>> | ErrorResponse;

@Injectable({providedIn: 'root'})
export class HttpApiCore {
  readonly httpClient: HttpClient = inject(HttpClient);
  readonly storeSignals = inject(StoreHandlerSignals)
  readonly security = inject(SecurityServices)

  private readonly paths: Record<TYPE_PathRequest, string> = {
    [CONST_PathRequest.REGISTER]: 'http://localhost:5041/auth/register',
    [CONST_PathRequest.LOGIN]: 'http://localhost:5041/auth/login',
    [CONST_PathRequest.ORDERS_CREATE]: 'http://localhost:5041/orders/create/',
    [CONST_PathRequest.ORDERS_ALL]: 'http://localhost:5041/orders/all/',
    [CONST_PathRequest.ORDER_UPDATE]: 'http://localhost:5041/orders/update/',
    [CONST_PathRequest.ORDER_DELETE]: 'http://localhost:5041/orders/delete/',
    [CONST_PathRequest.FILTER]: 'http://localhost:5041/orders/filter/',
    [CONST_PathRequest.ORDER_HISTORRICAL]: 'http://localhost:5041/orders/history/',
  };

  getPath(pathKey: TYPE_PathRequest): string {
    return this.paths[pathKey];
  }

  getPathWithId(pathKey: TYPE_PathRequest, id: number): string {
    return `${this.paths[pathKey]}${id}`;
  }

  async authLogin(login: LoginInterface) {
    try {
      const hashedPassword = await this.security.preHash(login.password);
      const updatedAuth = {...login, password: hashedPassword}
      console.log(updatedAuth)
      this.httpClient.post<SuccessResponse<AuthSessionInterface> | ErrorResponse>(
        this.getPath(CONST_PathRequest.LOGIN),
        updatedAuth,
        {withCredentials: true}
      ).subscribe({
        next: (response) => {
          if (response.success) {
            this.storeSignals.setAuthSession(response.data)
          }
        },
        error: (error) => {
          console.log({
            success: false,
            statusCode: 500,
            timestamp: new Date().toISOString(),
            path: 'auth',
            error: 'Network Error',
            message: error.message,
          } as ErrorResponse)
          this.storeSignals.setMessageUi('Network Error')
        }
      });
    } catch (err) {
      console.log({
        success: false,
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: 'auth',
        error: 'Internal Error',
        message: (err as any).message || 'Unknown error',
      } as ErrorResponse);
      this.storeSignals.setMessageUi('Internal Error')
    }
  }

  async authRegister(register:RegisterInterface) {
    try {

      const hashedPassword = await this.security.preHash(register.password);
      const updatedAuth = {...register, password: hashedPassword}
      this.httpClient.post<SuccessResponse<AuthSessionInterface> | ErrorResponse>(
        this.getPath(CONST_PathRequest.REGISTER),
        updatedAuth,
        {withCredentials: true}
      ).subscribe({
        next: (response) => {
          if (response.success) {
            this.storeSignals.setAuthSession(response.data)
          }
        },
        error: (error) => {
          console.log({
            success: false,
            statusCode: 500,
            timestamp: new Date().toISOString(),
            path: 'auth',
            error: 'Network Error',
            message: error.message,
          } as ErrorResponse)
          this.storeSignals.setMessageUi('Network Error')
        }
      });
    } catch (err) {
      console.log({
        success: false,
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: 'auth',
        error: 'Internal Error',
        message: (err as any).message || 'Unknown error',
      } as ErrorResponse);
      this.storeSignals.setMessageUi('Internal Error')
    }
  }

  async createOrder(createOrder : CreateOrderInterface){
    try {
      this.httpClient.post<GetOrdersReturnType>(
        this.getPath(CONST_PathRequest.ORDERS_CREATE),
        createOrder,
        {withCredentials: true}
      ).subscribe({
        next: (response) => {
          if (response.success) {
            this.storeSignals.setMessageUi('Order Created')
            this.storeSignals.setOrdersDatas(response.data.data)
          }
        },
        error: (error) => {
          console.log({
            success: false,
            statusCode: 500,
            timestamp: new Date().toISOString(),
            path: 'auth',
            error: 'Network Error',
            message: error.message,
          } as ErrorResponse)
          this.storeSignals.setMessageUi('Network Error')
        }
      });
    } catch (err) {
      console.log({
        success: false,
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: 'auth',
        error: 'Internal Error',
        message: (err as any).message || 'Unknown error',
      } as ErrorResponse);
      this.storeSignals.setMessageUi('Internal Error')
    }
  }

  async getAllOrders(){
    try {
      this.httpClient.get<GetOrdersReturnType>(
        this.getPath(CONST_PathRequest.ORDERS_ALL),
        {withCredentials: true}
      ).subscribe({
        next: (response) => {
          if (response.success) {
            this.storeSignals.setMessageUi('Get all Order')
            this.storeSignals.setOrdersDatas(response.data.data)
          }
        },
        error: (error) => {
          console.log({
            success: false,
            statusCode: 500,
            timestamp: new Date().toISOString(),
            path: 'orders',
            error: 'Network Error',
            message: error.message,
          } as ErrorResponse)
          this.storeSignals.setMessageUi('Network Error')
        }
      });
    } catch (err) {
      console.log({
        success: false,
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: 'orders',
        error: 'Internal Error',
        message: (err as any).message || 'Unknown error',
      } as ErrorResponse);
      this.storeSignals.setMessageUi('Internal Error')
    }
  }

  async filterOrder(filter: FilterOrderInterface){
    try {
      this.httpClient.post<GetOrdersReturnType>(
        this.getPath(CONST_PathRequest.FILTER),
        filter,
        {withCredentials: true}
      ).subscribe({
        next: (response) => {
          if (response.success) {
            this.storeSignals.setMessageUi('Orders filtered');
            this.storeSignals.setOrdersDatas(response.data.data)
          }
        },
        error: (error) => {
          console.log({
            success: false,
            statusCode: 500,
            timestamp: new Date().toISOString(),
            path: 'orders',
            error: 'Network Error',
            message: error.message,
          } as ErrorResponse)
          this.storeSignals.setMessageUi('Network Error')
        }
      });
    } catch (err) {
      console.log({
        success: false,
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: 'orders',
        error: 'Internal Error',
        message: (err as any).message || 'Unknown error',
      } as ErrorResponse);
      this.storeSignals.setMessageUi('Internal Error')
    }
  }

  // async updateOrder(orderId: number, update: UpdateOrdersInterface){
  //   try {
  //     this.httpClient.put<SuccessResponse<PagedResult<OrderResponseInterface[]>> | ErrorResponse>(
  //       this.getPathWithId(CONST_PathRequest.ORDER_UPDATE, orderId),
  //       update,
  //       {withCredentials: true}
  //     ).subscribe({
  //       next: (response) => {
  //         if (response.success) {
  //           // Extraire les données du PagedResult
  //           this.storeSignals.setOrdersDataTab(response.data.data)
  //         }
  //       },
  //       error: (error) => {
  //         console.log({
  //           success: false,
  //           statusCode: 500,
  //           timestamp: new Date().toISOString(),
  //           path: 'orders',
  //           error: 'Network Error',
  //           message: error.message,
  //         } as ErrorResponse)
  //         this.storeSignals.setMessageUI('Network Error')
  //       }
  //     });
  //   } catch (err) {
  //     console.log({
  //       success: false,
  //       statusCode: 500,
  //       timestamp: new Date().toISOString(),
  //       path: 'orders',
  //       error: 'Internal Error',
  //       message: (err as any).message || 'Unknown error',
  //     } as ErrorResponse);
  //     this.storeSignals.setMessageUI('Internal Error')
  //   }
  // }
  //


  async historyOrder(orderId:string){

  }
}
