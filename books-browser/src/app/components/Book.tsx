
import { useState } from "react"
import style from "./Book.module.css"
import Image from "next/image"

function Book({ book, clickAction }: iBook) {
    console.log()
    return (
        <li className={`${style.main}`} key={book.ISBN} onClick={() => clickAction?clickAction({ book }):null}>
            {/* <img src={book.cover} alt='book cover' /> */}
            <Image
                src={book.cover}
                alt="book cover"
                width={150*5}
                height={230*5}
            />
        </li>
    )
}
export default Book
