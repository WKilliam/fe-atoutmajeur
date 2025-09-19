import {CONST_OrderStatus} from '@constants';

export type TYPE_OrderStatuts = (typeof CONST_OrderStatus)[keyof typeof CONST_OrderStatus];
