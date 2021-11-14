import { GetSingleVerseUsecase } from '@/api/words/usecases/get-single-verse';
import { Word } from '@/api/words/models/word';
import { IGetSingleVerseRepository } from '../../repositories/interfaces';
import { IGetSingleVerse } from './interface';
import { BookInfo } from '@/api/words/utils/book-info';

const word: Word = {
  definition: 'definition',
  language: 'greek',
  original: 'original',
  parsing_long: 'parsing_long',
  parsing_short: 'parsing_short',
  reference: {
    book: 'genesis',
    chapter: 1,
    verse: 1,
  },
  sorting: 1,
  strong: 1,
  translation: 'translation',
  translit: 'translit',
};

function makeRepositoryStub(): IGetSingleVerseRepository {
  class GetSingleVerseRepositoryStub implements IGetSingleVerseRepository {
    async get(): Promise<Word> {
      return await new Promise(resolve => resolve(word));
    }
  }

  return new GetSingleVerseRepositoryStub();
}

interface SutTypes {
  sut: IGetSingleVerse;
  getSingleVerseRepository: IGetSingleVerseRepository;
}

function makeSut(): SutTypes {
  const getSingleVerseRepository = makeRepositoryStub();
  const bookInfo = new BookInfo();
  const sut = new GetSingleVerseUsecase(getSingleVerseRepository, bookInfo);
  return { sut, getSingleVerseRepository };
}

describe(`Get Single Verse - Repository`, () => {
  it(`should return data if it exists`, async () => {
    const { sut } = makeSut();

    const data = await sut.get({ book: 'any_book', verse: 1, chapter: 1 });

    expect(data).toEqual(word);
  });

  it(`should return null if data does not exist`, async () => {
    const { sut, getSingleVerseRepository } = makeSut();
    jest.spyOn(getSingleVerseRepository, 'get').mockResolvedValueOnce(null);

    const data = await sut.get({ book: 'any_book', verse: 1, chapter: 1 });

    expect(data).toBeNull();
  });

  it(`should call repository with proper data`, async () => {
    const { sut, getSingleVerseRepository } = makeSut();
    const spy = jest.spyOn(getSingleVerseRepository, 'get');

    const passedData = { book: 'any_book', verse: 1, chapter: 1 };
    await sut.get(passedData, { sorting: 'bsb' });

    expect(spy).toBeCalledWith(passedData, { sorting: 'bsb' });
  });

  it(`should call repository with proper sorting if sorting was not provided`, async () => {
    const { sut, getSingleVerseRepository } = makeSut();
    const spy = jest.spyOn(getSingleVerseRepository, 'get');

    const passedData = { book: 'any_book', verse: 1, chapter: 1 };
    await sut.get(passedData);

    expect(spy).toBeCalledWith(passedData, { sorting: 'hebrew' });
  });

  it(`should call repository with proper sorting if sorting was not provided`, async () => {
    const { sut, getSingleVerseRepository } = makeSut();
    const spy = jest.spyOn(getSingleVerseRepository, 'get');

    const passedData = { book: 'matthew', verse: 1, chapter: 1 };
    await sut.get(passedData);

    expect(spy).toBeCalledWith(passedData, { sorting: 'greek' });
  });
});
