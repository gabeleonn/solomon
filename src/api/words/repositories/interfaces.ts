import { Word } from '@/api/words/models/word';
import { Reference } from '@/api/words/models/reference';
import { IGetSingleVerseOptions } from '@/api/words/usecases/get-single-verse/interface';

export interface IGetSingleVerseRepository {
  get: (
    reference: Reference,
    options?: IGetSingleVerseOptions,
  ) => Promise<Word>;
}
