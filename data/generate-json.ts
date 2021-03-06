import fs from 'fs';
import xlsx, { CellValue, Row, Worksheet } from 'exceljs';

const wb = new xlsx.Workbook();
// const stream = fs.createReadStream('data/original.xlsx')

interface IObject {
  [key: string]: any[];
}
const Objeto: IObject = {
  genesis: [],
  exodus: [],
  leviticus: [],
  numbers: [],
  deuteronomy: [],
  joshua: [],
  judges: [],
  ruth: [],
  '1_samuel': [],
  '2_samuel': [],
  '1_kings': [],
  '2_kings': [],
  '1_chronicles': [],
  '2_chronicles': [],
  ezra: [],
  nehemiah: [],
  esther: [],
  job: [],
  psalm: [],
  proverbs: [],
  ecclesiastes: [],
  song_of_solomon: [],
  isaiah: [],
  jeremiah: [],
  lamentations: [],
  ezekiel: [],
  daniel: [],
  hosea: [],
  joel: [],
  amos: [],
  obadiah: [],
  jonah: [],
  micah: [],
  nahum: [],
  habakkuk: [],
  zephaniah: [],
  haggai: [],
  zechariah: [],
  malachi: [],
  matthew: [],
  mark: [],
  luke: [],
  john: [],
  acts: [],
  romans: [],
  '1_corinthians': [],
  '2_corinthians': [],
  galatians: [],
  ephesians: [],
  philippians: [],
  colossians: [],
  '1_thessalonians': [],
  '2_thessalonians': [],
  '1_timothy': [],
  '2_timothy': [],
  titus: [],
  philemon: [],
  hebrews: [],
  james: [],
  '1_peter': [],
  '2_peter': [],
  '1_john': [],
  '2_john': [],
  '3_john': [],
  jude: [],
  revelation: [],
};

function spreadReference(sheet: Worksheet): void {
  let lastValue = null;

  for (let i = 2; i <= sheet.rowCount; i++) {
    const row = sheet.getRow(i);
    const cell = row.getCell(11).value;
    if (cell) {
      lastValue = cell;
    } else {
      sheet.getRow(i).getCell(11).value = lastValue;
      row.commit();
    }
  }
}

function toObject(
  header: CellValue[] | { [key: string]: CellValue },
  row: Row,
  reference: string[],
): { [key: string]: CellValue | string[] | Object } {
  const object: { [key: string]: CellValue | string[] | Object } = {};
  if (Array.isArray(row.values)) {
    row.values.forEach((value, index) => {
      if (index > 0) {
        if (Array.isArray(header)) {
          const identifier = header[index]?.toString();

          if (identifier) {
            if (identifier === 'cross_reference') {
              object[identifier] = value
                .toString()
                .replace('(', '')
                .replace(')', '')
                .split(';')
                .map(each => each.trim());
            } else if (identifier === 'reference') {
              object.book = reference[2];
              object.chapter = reference[3];
              object.verse = reference[4];
            } else if (identifier === 'language') {
              object[identifier] = value.toString().toLowerCase();
            } else {
              object[identifier] =
                typeof value === 'string' ? value.toString().trim() : value;
            }
          }
        }
      }
    });
  }
  return object;
}

async function readFile(): Promise<void> {
  const file = await wb.xlsx.readFile('data/original.xlsx');
  const sheet = file.getWorksheet('data');
  const regex = /^(\d?\s?([a-z]+\s?)+)\s(\d{1,3}):(\d{1,3})$/gi;

  const header = sheet.getRow(1).values;

  spreadReference(sheet);

  let debug = 0;

  try {
    for (let i = 2; i <= sheet.rowCount; i++) {
      // columnName: value
      debug = i;
      const row = sheet.getRow(i);

      const matches = [...row.getCell(11).text.matchAll(regex)][0];
      const book = matches[1].toLowerCase().trim().replace(/\s/gi, '_');
      Objeto[book].push(toObject(header, row, matches));
    }
    writeFiles(Objeto);
  } catch (e) {
    console.log(e);
    console.log(sheet.getRow(debug).values);
  }
}

function writeFiles(output: IObject): void {
  // console.log(Object.keys(output))

  for (const key of Object.keys(output)) {
    fs.writeFileSync(`data/books/${key}.json`, JSON.stringify(output[key]));
  }
}

// function writeFile(output: IObject) {
//     fs.writeFileSync(`data/books/bible.json`, JSON.stringify(output))
// }

readFile().catch(e => console.log(e));
