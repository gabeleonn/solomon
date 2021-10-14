const fs = require('fs')
const xlsx = require('exceljs')

const wb = new xlsx.Workbook()
const stream = fs.createReadStream('data/original.xlsx')

function spreadReference(sheet) {
    let lastValue = null

    for(let i = 2; i <= sheet.rowCount; i++) {
        const row = sheet.getRow(i)
        const cell = row.getCell(11).value
        if(cell) {
            lastValue = cell
        } else {
            sheet.getRow(i).getCell(11).value = lastValue
            row.commit()
        }      
    }
}

function toObject(header, row) {
    const object = {}
    row.values.map((value, index) => {
        if(index > 0) {
            object[header[index]] = value
        }
        
    })
    return object
}

async function readFile() {
    const object = {
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
        revelation: []
    }

    const file = await wb.xlsx.read(stream)
    const sheet = file.getWorksheet('data')
    const regex = /^(\d?\s?([a-z]+\s?)+)\s\d{1,3}:\d{1,3}$/gi

    const header = sheet.getRow(1).values;

    spreadReference(sheet)

    let debug = 0;

    try {
        for(let i = 2; i <= sheet.rowCount; i++) {
            // columnName: value
            debug = i;
            const row = sheet.getRow(i)
            
            const matches = [...row.getCell(11).value.matchAll(regex)][0];
            object[matches[1].toLowerCase().trim().replace(/\s/gi, '_')].push(toObject(header, row))
            
        }
        writeFiles(object);
    } catch(e) {
        console.log(e)
        console.log(sheet.getRow(debug).values)
    }   
}

function writeFiles(output) {
    // console.log(Object.keys(output))

    for (let key of Object.keys(output)) {
        console.log(key)
        fs.writeFileSync(`data/books/${key}.json`, JSON.stringify(output[key]))
    }
    
}

function writeFile(output) {
    fs.writeFileSync(`data/books/bible.json`, JSON.stringify(output))
}

readFile();
