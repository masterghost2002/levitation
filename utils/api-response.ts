import type { ApiResponseType } from '../types';
class ApiResponse {
  statusCode: number;
  data: object;
  message: string;
  success: boolean;
  constructor({ statusCode, data, message = 'Success' }: ApiResponseType) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export default ApiResponse;
