
import { useState } from "react"
import style from "./Book.module.css"

function Book ({title,pages,genre,cover,synopsis,year,ISBN}:iCoreBook){
    
    return (
        <div className={`${style.main}`} key={ISBN}>
            <img src={cover} alt='book cover'/>
            <span>{pages}</span>
        </div>
    )
}
 export default Book
