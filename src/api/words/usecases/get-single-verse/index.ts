import {
  IGetSingleVerse,
  IGetSingleVerseOptions,
} from '@/api/words/usecases/get-single-verse/interface';
import { Reference } from '@/api/words/models/reference';
import { Word } from '@/api/words/models/word';
import { IGetSingleVerseRepository } from '@/api/words/repositories/interfaces';
import { BookInfo } from '@/api/words/utils/book-info';

export class GetSingleVerseUsecase implements IGetSingleVerse {
  private readonly getSingleVerseRepository: IGetSingleVerseRepository;
  private readonly bookInfo: BookInfo;

  constructor(
    getSingleVerseRepository: IGetSingleVerseRepository,
    bookInfo: BookInfo,
  ) {
    this.getSingleVerseRepository = getSingleVerseRepository;
    this.bookInfo = bookInfo;
  }

  async get(
    reference: Reference,
    options?: IGetSingleVerseOptions,
  ): Promise<Word> {
    if (options?.sorting) {
      return await this.getSingleVerseRepository.get(reference, options);
    }
    return await this.getSingleVerseRepository.get(reference, {
      sorting: this.bookInfo.isNewTestment(reference.book) ? 'greek' : 'hebrew',
    });
  }
}
