import { IResponse } from '@/common/protocols/controller';
import { ServerError } from '@/common/errors';

export const badRequest = (error: Error): IResponse => ({
  status: 400,
  message: error.message,
});

export const notFound = (): IResponse => ({
  status: 404,
  message: 'Recurso não encontrado',
});

export const serverError = (error: Error): IResponse => ({
  status: 500,
  data: new ServerError(error.stack),
});

export const ok = (data: any): IResponse => ({
  status: 200,
  data,
});
