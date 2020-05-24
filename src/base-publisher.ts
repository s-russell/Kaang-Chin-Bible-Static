import { Bible, Book } from "./bible"
var bibleJson = require("../data/kc-nt-bible.json")

export abstract class AbstractPublisher {
    protected bible: Bible

    constructor() {
        this.bible = { books: bibleJson as Book[] }
    }

    abstract async publish(): Promise<void>
}
