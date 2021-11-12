import {
  IController,
  IRequest,
  IResponse,
} from '@/common/protocols/controller';

export class GetSingleVerseController implements IController {
  async handle({ data }: IRequest): Promise<IResponse> {
    for (const field of ['book', 'chapter', 'verse']) {
      if (!data[field]) {
        return {
          status: 400,
          message: `O parametro "${field}" é necessário.`,
        };
      }
    }
    return await new Promise(resolve =>
      resolve({ status: 400, message: 'O parametro "book" é necessário.' }),
    );
  }
}
