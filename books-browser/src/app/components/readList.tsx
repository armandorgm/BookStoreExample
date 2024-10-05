import { useEffect, useState } from "react"
import style from "./readList.module.css"
import Book from "./Book"

export default function ReadList({ books }: { books: iCoreBook[] }) {
    console.log(books)
    return (
        <div className={style.main}>
            <h2 className={style.title}>{books.length ? books.length : "Sin"} libro{books.length!=1?"s":""} en la lista de lectura</h2>
            <div className="grid grid-cols-2 gap-1">
                {books.map(book => (
                    <Book key={book.ISBN} book={book} clickAction={null}/>)
                    )}
            </div>
        </div>
    )
}