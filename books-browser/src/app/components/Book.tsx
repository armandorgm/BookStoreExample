
import style from "./Book.module.css"

function Book ({title,pages,genre,cover,synopsis,year,ISBN}){
    return (
        <li className={style.main} key={ISBN}>
            <img src={cover} alt='book cover'/>
            <span>{pages}</span>
        </li>
    )
}
 export default Book
