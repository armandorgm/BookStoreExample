interface iCoreBook {
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: number,
    ISBN: string,
    clickAction: () => {}
}

interface iBook {
    book: iCoreBook
}
interface iLibrary {
    library: iBook[]
}
type iGenre = "Todos" | "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror"