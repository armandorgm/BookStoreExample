
import { useState } from "react"
import style from "./Book.module.css"

function Book ({title,pages,genre,cover,synopsis,year,ISBN,clickedISBNtoRead}){
    const[selected,setSelected]=useState(false)
    
    return (
        <li className={style.main} key={ISBN} onClick={
            () => clickedISBNtoRead(ISBN)
        }>
            <img src={cover} alt='book cover'/>
            <span>{pages}</span>
        </li>
    )
}
 export default Book
