'use client'
import styles from './Library.module.css';
import Book from "./Book"; 
import { useState, useEffect } from 'react';

 export default function Stand ({booksSource}:{booksSource:any[]}){
    
    

    if (typeof window !== 'undefined') {
        console.log(`Library-receives: ${booksSource instanceof Array?"array of "+ booksSource.length:"not array type:"+typeof(booksSource)+" "+JSON.stringify(booksSource)}`)
    }

    const clickedBook = (ISBN) => {
        const newClickedBook = booksSource.find((book)=>book.book.ISBN == ISBN).book
        //setBooksElementInReadList(bookMapper([newClickedBook]))//breaks code
        console.log(newClickedBook)
        //console.log("tamaño previo de array: " + booksElementInReadList.length)
        const newReadList = [...booksElementInReadList,newClickedBook]
        //console.log("tamaño post de array: " + newReadList.length)
        setBooksElementInReadList((previousState)=>[...previousState,<Book cover={newClickedBook.cover}/>])
        console.log(ISBN)
      };

    function bookMapper(books:any[],clickAction:()=>{}){
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
                clickAction={clickAction}
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

    
    return (
        <div className={styles.main}>
            <ol className={styles.stand}>
                {filteredBooksElement}
            </ol>
        </div>
    )
 }
