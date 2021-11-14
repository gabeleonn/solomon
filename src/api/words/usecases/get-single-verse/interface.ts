import { Reference } from '@/api/words/models/reference';
import { Word } from '@/api/words/models/word';

export interface IGetSingleVerseOptions {
  sorting?: 'bsb' | 'hebrew' | 'greek';
}

export interface IGetSingleVerse {
  get: (
    reference: Reference,
    options?: IGetSingleVerseOptions,
  ) => Promise<Word>;
}
