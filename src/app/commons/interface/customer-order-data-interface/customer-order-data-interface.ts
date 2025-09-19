import {TYPE_GarmentLabel} from '../../types/garment-possibility-types/garment-possibility-types';

export interface CustomerOrderInterface {
  id: number;
  orderNumber: string;
  date: string;
  customer: string
  items: TYPE_GarmentLabel;
  status: string;
  totalPrice: number;
  estimatedDate?: string;
  canCancel: boolean;
  numberItem: number;
}
