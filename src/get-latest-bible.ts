import * as https from 'https'
import * as fs from 'fs/promises'
import * as mkdirp from 'mkdirp'

const writeJSONFile = async (data: string) => {
    await mkdirp('./data')
    await fs.writeFile('./data/kc-nt-bible.json', data)
}

https.get(
    'https://raw.githubusercontent.com/s-russell/kaang-chin-bible-data/master/data/nt-final.json',
    (res) => {
        let body = ''

        res.on('data', (chunk) => (body += chunk))

        res.on('end', () => {
            writeJSONFile(body)
        })
    }
)
