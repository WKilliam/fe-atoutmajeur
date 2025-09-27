import {ErrorResponse, SuccessResponse} from '@interfaces';

export type AuthResponseTypes<T = unknown> = SuccessResponse<T> | ErrorResponse;
