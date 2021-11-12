import { Reference } from '@/api/words/models/reference';
import { Word } from '@/api/words/models/word';

export interface IGetSingleVerse {
  get: (reference: Reference) => Promise<Word>;
}
