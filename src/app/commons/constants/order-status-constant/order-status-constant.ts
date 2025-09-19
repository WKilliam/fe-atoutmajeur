import {SelectUiOptionsInterface} from '@interfaces';

export const CONST_OrderStatus = {
  PENDING: { label: 'Pending' },
  VALIDATED: { label: 'Validated' },
  REJECTED: { label: 'Rejected' },
  IN_PROGRESS: { label: 'In Progress' },
  COMPLETED: { label: 'Completed' },
  CANCELLED: { label: 'Cancelled' },
  READY: { label: 'Ready' },
  DELIVERED: { label: 'Delivered' }
};
export const CONST_OrderStatusSelectOptions: SelectUiOptionsInterface[] = [
  { value: '', label: 'All Status' },
  { value: 'PENDING', label: CONST_OrderStatus.PENDING.label },
  { value: 'VALIDATED', label: CONST_OrderStatus.VALIDATED.label },
  { value: 'REJECTED', label: CONST_OrderStatus.REJECTED.label },
  { value: 'IN_PROGRESS', label: CONST_OrderStatus.IN_PROGRESS.label },
  { value: 'COMPLETED', label: CONST_OrderStatus.COMPLETED.label },
  { value: 'CANCELLED', label: CONST_OrderStatus.CANCELLED.label },
  { value: 'READY', label: CONST_OrderStatus.READY.label },
  { value: 'DELIVERED', label: CONST_OrderStatus.DELIVERED.label }
];
