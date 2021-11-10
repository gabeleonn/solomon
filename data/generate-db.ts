import fs from 'fs'
import { MongoClient } from 'mongodb'
import env from '../src/config/env'


const client = new MongoClient(env.mongoUrl)

async function generate() {
    await client.connect()
    const db = client.db('words-api')
    const collection = db.collection('words')
    const files = fs.readdirSync('./data/books', { encoding: 'utf8', withFileTypes: true }).filter(dir => /.json$/gi.test(dir.name))

    const words = []
    files.forEach(async each => {
            const file = fs.readFileSync(`./data/books/${each.name}`, { encoding: 'utf8' })
            const json = JSON.parse(file)
            json.map(word => words.push(word))
    })

    await collection.insertMany(words)

    console.log(await collection.find({  book: "John", chapter: "2", verse: "1" }).toArray())
}

generate()
    .then()
    .catch(e => console.log(e.message))
    .finally(() => client.close())