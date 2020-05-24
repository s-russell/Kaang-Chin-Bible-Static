export interface Verse {
    number: number
    text: string
    title: string | null
}

export interface Chapter {
    number: number
    verses: Verse[]
}

export interface Book {
    name: string
    chapters: Chapter[]
}

export interface Bible {
    books: Book[]
}
