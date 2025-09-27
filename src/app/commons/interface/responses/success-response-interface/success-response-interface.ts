import {ResponseInterface} from '../response-interface';

export interface SuccessResponse<T = unknown> extends ResponseInterface{
  success : true
  data: T;
}
