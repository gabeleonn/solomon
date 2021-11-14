import { GetSingleVerseController } from '.';
import { IGetSingleVerse } from '@/api/words/usecases/get-single-verse/interface';
import { Reference } from '@/api/words/models/reference';
import { Word } from '@/api/words/models/word';
import { IController } from '@/common/protocols/controller';
import { MissingParamError, ServerError } from '@/common/errors';
import { badRequest, ok, serverError } from '@/common/helpers/http';

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

function makeGetSingleVerseStub(): IGetSingleVerse {
  class GetSingleVErseStub implements IGetSingleVerse {
    async get(reference: Reference): Promise<Word> {
      return await new Promise(resolve => resolve(word));
    }
  }

  return new GetSingleVErseStub();
}

interface SutType {
  getSingleVerseStub: IGetSingleVerse;
  sut: IController;
}

function makeSut(): SutType {
  const getSingleVerseStub = makeGetSingleVerseStub();
  const sut = new GetSingleVerseController(getSingleVerseStub);
  return {
    sut,
    getSingleVerseStub,
  };
}

describe(`Get single verse controller`, () => {
  it(`should return 400 if book field is not present`, async () => {
    const { sut } = makeSut();

    const response = await sut.handle({
      params: {
        book: undefined,
        chapter: 1,
        verse: 1,
      },
    });

    expect(response).toEqual(badRequest(new MissingParamError('book')));
  });

  it(`should return 400 if chapter field is not present`, async () => {
    const { sut } = makeSut();

    const response = await sut.handle({
      params: {
        book: 'genesis',
        chapter: undefined,
        verse: 1,
      },
    });

    expect(response).toEqual(badRequest(new MissingParamError('chapter')));
  });

  it(`should return 400 if verse field is not present`, async () => {
    const { sut } = makeSut();

    const response = await sut.handle({
      params: {
        book: 'genesis',
        chapter: 1,
        verse: undefined,
      },
    });

    expect(response).toEqual(badRequest(new MissingParamError('verse')));
  });

  it(`should call usecase with proper data (without params)`, async () => {
    const { sut, getSingleVerseStub } = makeSut();
    const spy = jest.spyOn(getSingleVerseStub, 'get');

    await sut.handle({
      params: {
        book: 'genesis',
        chapter: 1,
        verse: 1,
      },
    });

    expect(spy).toBeCalledWith({
      book: 'genesis',
      chapter: 1,
      verse: 1,
    });
  });

  it(`should call usecase with proper data (with params)`, async () => {
    const { sut, getSingleVerseStub } = makeSut();
    const spy = jest.spyOn(getSingleVerseStub, 'get');

    await sut.handle({
      params: {
        book: 'genesis',
        chapter: 1,
        verse: 1,
      },
      query: {
        sorting: 'bsb',
      },
    });

    expect(spy).toBeCalledWith(
      {
        book: 'genesis',
        chapter: 1,
        verse: 1,
      },
      { sorting: 'bsb' },
    );
  });

  it(`should return right response`, async () => {
    const { sut } = makeSut();

    const response = await sut.handle({
      params: {
        book: 'genesis',
        chapter: 1,
        verse: 1,
      },
    });

    expect(response).toEqual(ok(word));
  });

  it(`should return server error if usecase throws`, async () => {
    const { sut, getSingleVerseStub } = makeSut();
    jest.spyOn(getSingleVerseStub, 'get').mockRejectedValueOnce(new Error());

    const response = await sut.handle({
      params: {
        book: 'genesis',
        chapter: 1,
        verse: 1,
      },
    });

    expect(response).toEqual(serverError(new ServerError('any')));
  });
});
