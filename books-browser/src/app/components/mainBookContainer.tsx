import Book from "./Book"
import style from "./mainBookContainer.module.css"

export default function MainBookContainer({books}) {
    console.log("MainBookContainer actualizado")

    return (
        <div className={style.main}>
            {books.map((book:iBook,index)=>(<Book key={book.book.ISBN} cover={book.book.cover}/>))}
        </div>
    )
}