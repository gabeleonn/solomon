import { IGetSingleVerse } from '@/api/words/usecases/get-single-verse/interface';

import {
  IController,
  IRequest,
  IResponse,
} from '@/common/protocols/controller';
import { MissingParamError, ServerError } from '@/common/errors';
import { badRequest, ok, serverError } from '@/common/helpers/http';

export class GetSingleVerseController implements IController {
  private readonly getSingleVerse: IGetSingleVerse;

  constructor(getSingleVerse: IGetSingleVerse) {
    this.getSingleVerse = getSingleVerse;
  }

  async handle({ data }: IRequest): Promise<IResponse> {
    try {
      for (const field of ['book', 'chapter', 'verse']) {
        if (!data[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const { book, chapter, verse } = data;

      const singleVerse = await this.getSingleVerse.get({
        book,
        chapter,
        verse,
      });

      return ok(singleVerse);
    } catch (error) {
      return serverError(new ServerError(error.stack));
    }
  }
}
