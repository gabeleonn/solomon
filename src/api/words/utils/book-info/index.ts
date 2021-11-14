const books = [
  'matthew',
  'mark',
  'luke',
  'john',
  'acts',
  'romans',
  '1_corinthians',
  '2_corinthians',
  'galatians',
  'ephesians',
  'philippians',
  'colossians',
  '1_thessalonians',
  '2_thessalonians',
  '1_timothy',
  '2_timothy',
  'titus',
  'philemon',
  'hebrews',
  'james',
  '1_peter',
  '2_peter',
  '1_john',
  '2_john',
  '3_john',
  'jude',
  'revelation',
];

export class BookInfo {
  isNewTestment(book: string): boolean {
    return books.includes(book);
  }
}
