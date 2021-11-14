import fs from 'fs';
import config from '../src/config/database';
import { MongoHelper } from '../src/common/helpers/mongo-helper';

async function generate(): Promise<void> {
  await MongoHelper.connect(config.mongoUrl);
  const collection = MongoHelper.getCollection('words');
  const files = fs
    .readdirSync('./data/books', { encoding: 'utf8', withFileTypes: true })
    .filter(dir => /.json$/gi.test(dir.name));

  const words = [];
  files.forEach((each): void => {
    const file = fs.readFileSync(`./data/books/${each.name}`, {
      encoding: 'utf8',
    });
    const json = JSON.parse(file);
    json.forEach((word: any) => words.push(word));
  });

  await collection.insertMany(words);

  console.log(
    await collection.find({ book: 'John', chapter: '2', verse: '1' }).toArray(),
  );
}

generate()
  .then()
  .catch(e => console.log(e.message))
  .finally(async () => await MongoHelper.disconnect());
