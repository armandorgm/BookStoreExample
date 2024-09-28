'use client'
import styles from './Library.module.css';
import Book from "./Book"; 
import { useState, useEffect } from 'react';


 function Library ({booksSource}){
    const [pagefilter, setPagefilter] = useState(9999);
    const [filteredBooks, setFilteredBooks] = useState(booksSource);
    const [filteredBooksElement, setFilteredBooksElement] = useState([]
        /* filteredBooks.map((bookJson:any) =>(
            <Book 
                title ={bookJson.book.title}
                pages={bookJson.book.pages}
                genre={bookJson.book.genre}
                cover={bookJson.book.cover}
                synopsis={bookJson.book.synopsis}
                year={bookJson.book.year}
                ISBN={bookJson.book.ISBN}
                key={bookJson.book.ISBN}
                />
        )) */
    );

    if (typeof window !== 'undefined') {
        console.log(`Library-receives: ${booksSource instanceof Array?"array of "+ booksSource.length:"not array type:"+typeof(booksSource)+" "+JSON.stringify(booksSource)}`)
    }

    useEffect(() => {
        setFilteredBooks(booksSource)
        const booksElements= booksSource.map((bookJson:any) =>(
            <Book 
                title ={bookJson.book.title}
                pages={bookJson.book.pages}
                genre={bookJson.book.genre}
                cover={bookJson.book.cover}
                synopsis={bookJson.book.synopsis}
                year={bookJson.book.year}
                ISBN={bookJson.book.ISBN}
                key={bookJson.book.ISBN}
                />
        ))
        setFilteredBooksElement(booksElements);
    }, [booksSource]);
    
    useEffect(() => {
        const result = booksSource.filter((book) =>  book.book.pages <= pagefilter);
        setFilteredBooksElement(filteredBooks.map((bookJson:any) =>(
            <Book 
                title ={bookJson.book.title}
                pages={bookJson.book.pages}
                genre={bookJson.book.genre}
                cover={bookJson.book.cover}
                synopsis={bookJson.book.synopsis}
                year={bookJson.book.year}
                ISBN={bookJson.book.ISBN}
                key={bookJson.book.ISBN}
                />
        )))
        setFilteredBooks(result);
    }, [pagefilter]);

    useEffect(() => {
        console.debug("filteredBooks actualizado:", filteredBooks.length);
    }, [filteredBooks]);

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value, 10); // Convierte el valor a un número entero
        setPagefilter(newValue); // Actualiza el estado con el nuevo valor del slider
      };
    return (
        <div className={styles.main}>
            <div>
                <div>
                    <h3>filtrar por cantidad de paginas</h3>
                        <div>
                            <input type="range" id="pagefilter" name="pagefilter" value = {pagefilter} min="0" max="999" onChange={handleSliderChange}/>
                        </div>
                    <p>Valor seleccionado: {pagefilter}</p>
                </div>
            </div>
                <h1>{filteredBooks.length} libros disponibles</h1>
            <ol>
                {filteredBooksElement}
            </ol>
        </div>
    )
 }
 export default Library
