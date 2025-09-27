import {TYPE_GarmentLabel} from '@types';

export interface CreateOrderInterface {
  estimatedDate?: string;
  numberItems: number;
  garmentType: TYPE_GarmentLabel;
  customerComment: string[];
}
