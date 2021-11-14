import { Reference } from '@/api/words/models/reference';
import { Word } from '@/api/words/models/word';

interface IOptions {
  sorting?: 'bsb' | 'hebrew' | 'greek';
}

export interface IGetSingleVerse {
  get: (reference: Reference, options?: IOptions) => Promise<Word>;
}
