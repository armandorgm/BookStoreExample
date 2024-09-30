import { useEffect, useState } from "react"
import style from "./readList.module.css"
import Book from "./Book"

export default function ReadList({books}:{books:any[]}){
    const [booksInReadList,setBooksInReadList] = useState<any[]>([])
    useEffect(()=>{

        setBooksInReadList(books)
    },[books])
    return (
        <div className={style.main}>
            <h2 className={style.title}>{books.length?books.length:"Sin"} libros en la lista de lectura</h2>
            {booksInReadList} 
        </div>
    )
}