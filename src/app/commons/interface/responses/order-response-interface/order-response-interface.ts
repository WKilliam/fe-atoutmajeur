import {TYPE_OrderStatuts} from '@types';

export interface OrderResponseInterface {
  id: number;
  orderRef:string;
  estimatedDate: string;
  status: TYPE_OrderStatuts
  totalPrice: number;
  numberItems: number;
  customerReason: string;
  customerComment:string;
  createdAt: string;
}
