import {
  IController,
  IRequest,
  IResponse,
} from '@/common/protocols/controller';

export class GetSingleVerseController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    console.log(request);
    return await new Promise(resolve =>
      resolve({ status: 400, message: 'O parametro "book" é necessário.' }),
    );
  }
}
