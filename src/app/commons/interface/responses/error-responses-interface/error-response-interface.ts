import {ResponseInterface} from '../response-interface';

export interface ErrorResponse extends ResponseInterface{
  success: false;
  errorDetails?: string;
}
