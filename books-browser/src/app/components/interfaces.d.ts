interface iCoreBook {
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: number,
    ISBN: string,
}

interface iBook {
    book: iCoreBook
    clickAction: any
}
interface iLibrary {
    library: iBook[]
}
type iGenre = "Todos" | "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror"