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
});
