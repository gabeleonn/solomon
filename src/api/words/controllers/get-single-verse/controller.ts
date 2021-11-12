import {
  IController,
  IRequest,
  IResponse,
} from '@/common/protocols/controller';
import { IGetSingleVerse } from '@/api/words/usecases/get-single-verse/interface';

export class GetSingleVerseController implements IController {
  private readonly getSingleVerse: IGetSingleVerse;

  constructor(getSingleVerse: IGetSingleVerse) {
    this.getSingleVerse = getSingleVerse;
  }

  async handle({ data }: IRequest): Promise<IResponse> {
    for (const field of ['book', 'chapter', 'verse']) {
      if (!data[field]) {
        return {
          status: 400,
          message: `O parametro "${field}" é necessário.`,
        };
      }
    }

    const { book, chapter, verse } = data;

    const singleVerse = await this.getSingleVerse.get({ book, chapter, verse });

    return { status: 200, data: { ...singleVerse } };
  }
}
