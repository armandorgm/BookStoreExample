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

interface iMainBookContainer{
    books:iBook[],
    bookclickedAction:any
}

type iGenre = "Todos" | "Fantasía" | "Ciencia ficción" | "Zombies" | "Terror"

interface iBookFilters{
    pagefilter:number
    setPagefilter:Dispatch<SetStateAction<number>>
    genreFilter:iGenre
    setGenreFilter:Dispatch<SetStateAction<iGenre[]>>
}
type bookMapperFunction = (book:iCoreBook)=>iBook 