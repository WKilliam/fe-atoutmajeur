export interface CustomerOrderInterface {
  id: number;
  orderRef: string;
  userId: number;
  estimatedDate?: string;
  status: string;
  garments: string;
  totalPrice: number;
  numberItems: number;
  createdAt: string;
  updatedAt: string;
}
