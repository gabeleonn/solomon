import { GetSingleVerseController } from './controller';

describe(`Get single verse controller`, () => {
  it(`should return 400 if book field is not present`, async () => {
    const sut = new GetSingleVerseController();

    const response = await sut.handle({
      data: {
        book: undefined,
        chapter: 1,
        verse: 1,
      },
    });

    expect(response).toEqual({
      status: 400,
      message: 'O parametro "book" é necessário.',
    });
  });

  it(`should return 400 if chapter field is not present`, async () => {
    const sut = new GetSingleVerseController();

    const response = await sut.handle({
      data: {
        book: 'genesis',
        chapter: undefined,
        verse: 1,
      },
    });

    expect(response).toEqual({
      status: 400,
      message: 'O parametro "chapter" é necessário.',
    });
  });

  it(`should return 400 if verse field is not present`, async () => {
    const sut = new GetSingleVerseController();

    const response = await sut.handle({
      data: {
        book: 'genesis',
        chapter: 1,
        verse: undefined,
      },
    });

    expect(response).toEqual({
      status: 400,
      message: 'O parametro "verse" é necessário.',
    });
  });
});
