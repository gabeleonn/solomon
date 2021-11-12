import { Reference } from './reference';
export type Language = 'hebrew' | 'greek';

export interface Word {
  sorting: number;
  language: Language;
  reference: Reference;
  original: string;
  translit: string;
  strong: number;
  definition: string;
  translation: string;
  heading?: string;
  cross_reference?: string[];
  parsing_short: string;
  parsing_long: string;
}
