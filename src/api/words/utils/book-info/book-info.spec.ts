import { BookInfo } from '@/api/words/utils/book-info';

describe(`Book Info Utils`, () => {
  it(`should return true if book passed is new from testment`, () => {
    const sut = new BookInfo();

    expect(sut.isNewTestment('matthew')).toBe(true);
  });

  it(`should return false if book passed is not new from testment`, () => {
    const sut = new BookInfo();

    expect(sut.isNewTestment('genesis')).toBe(false);
  });
});
