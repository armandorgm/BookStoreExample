'use client'
import styles from './Library.module.css';
import Book from "./Book"; 
import { useState, useEffect } from 'react';

function ReadList({placeholder}){
    const [booksInReadList,setBooksInReadList] = useState([])
    
    return (
        <div>
            {booksInReadList}
        </div>
    )
}

 function Library ({booksSource}:{booksSource:any[]}){
    console.log("Library me reinicie")
    const [pagefilter, setPagefilter] = useState(9999);
    const [filteredBooks, setFilteredBooks] = useState(booksSource);
    const [filteredBooksElement, setFilteredBooksElement] = useState([] );
    const [genreFilter, setGenreFilter] = useState([] );
    
    const [booksElementInReadList, setBooksElementInReadList] = useState([] );

    

    if (typeof window !== 'undefined') {
        console.log(`Library-receives: ${booksSource instanceof Array?"array of "+ booksSource.length:"not array type:"+typeof(booksSource)+" "+JSON.stringify(booksSource)}`)
    }

    const clickedBook = (ISBN) => {
        const newClickedBook = booksSource.find((book)=>book.book.ISBN == ISBN).book
        //setBooksElementInReadList(bookMapper([newClickedBook]))//breaks code
        //console.log(newClickedBook)
        //console.log("tamaño previo de array: " + booksElementInReadList.length)
        const newReadList = [...booksElementInReadList,newClickedBook]
        //console.log("tamaño post de array: " + newReadList.length)
        setBooksElementInReadList((<div>hola</div>))
        console.log(ISBN)
      };

    function bookMapper(books:any[],clickAction){
        console.debug(books)
        const newBooksElements = books.map((bookJson:any) =>(
            <Book 
                title ={bookJson.book.title}
                pages={bookJson.book.pages}
                genre={bookJson.book.genre}
                cover={bookJson.book.cover}
                synopsis={bookJson.book.synopsis}
                year={bookJson.book.year}
                ISBN={bookJson.book.ISBN}
                key={bookJson.book.ISBN}
                clickedISBNtoRead={clickAction}
                />
        ))
        return newBooksElements
    }
    useEffect(() => {
        setFilteredBooks(booksSource)
        setFilteredBooksElement(bookMapper(booksSource,clickedBook));
    }, [booksSource]);

    useEffect(() => {
        const result = booksSource.filter((book) =>  book.book.pages <= pagefilter && (genreFilter=="Todos"||book.book.genre == genreFilter));
        setFilteredBooksElement(bookMapper(result,clickedBook))
        setFilteredBooks(result);
    }, [pagefilter,genreFilter]);

    useEffect(() => {
        console.debug("filteredBooks actualizado:", filteredBooks.length);
    }, [filteredBooks]);

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value, 10); // Convierte el valor a un número entero
        setPagefilter(newValue); // Actualiza el estado con el nuevo valor del slider
    };
    const genreFilterChange = (event) => {
        const newValue = event.target.value; // Convierte el valor a un número entero
        setGenreFilter(newValue); // Actualiza el estado con el nuevo valor del slider
    };
      

      useEffect(() => {
        console.debug("booksElementInReadList actualizado a:", booksElementInReadList);
    }, [booksElementInReadList]);
    
    return (
        <div className={styles.main}>
            <div>
                <div>
                    <div className={styles.inputsContainer}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="pagefilter">cantidad max. paginas</label>
                            <div className={styles.horizontalContainer}>
                                <input type="range" id="pagefilter" name="pagefilter" value = {pagefilter} min="0" max="999" onChange={handleSliderChange}/>
                                <p>{pagefilter}</p>
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="genre">Género</label>
                            <select className={styles.genreFilter} name="genre" id="genreFilter" name="pagefilter" onChange={genreFilterChange}>
                                <option value="Todos">Todos</option>
                                <option value="Fantasía">Fantasía</option>
                                <option value="Ciencia ficción">Ciencia ficción</option>
                                <option value="Zombies">Zombies</option>
                                <option value="Terror">Terror</option>    
                            </select>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <h1>{filteredBooks.length} libros disponibles</h1>
                </div>
                <div className={styles.mainContainer}>

                    <ol className={styles.bookContainer}>
                        {filteredBooksElement}
                    </ol>
                    <ol className={styles.readContainer}>
                        <h2>{booksElementInReadList.length?booksElementInReadList.length:"Sin"} libros en la lista de lectura</h2>
                        {booksElementInReadList}
                    </ol>

                </div>
        </div>
    )
 }
 export default Library
