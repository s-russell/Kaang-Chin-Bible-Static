import { AbstractPublisher } from "./base-publisher"
import * as mkdirp from "mkdirp"
import { promises as fs } from 'fs'

export class TxtPublisher extends AbstractPublisher {
    async publish(): Promise<void> {
        const lines: string[] = ["THU CIIM", "========"]
        this.bible.books.forEach(({ name, chapters }) => {
            lines.push("", name)
            chapters.forEach(({ number: chapter, verses }) => {
                lines.push(`Chapter ${chapter}`)
                verses.forEach(({ number, text, title }) => {
                    let msg = title ? title + "\n" : ""
                    msg += `\t(${name} ${chapter}:${number}) ${text}`
                    lines.push(msg)
                })
            })
        })
        await mkdirp("./artifacts")
        await fs.writeFile("./artifacts/kc-nt-bible.txt", lines.join("\n"))
    }
}
