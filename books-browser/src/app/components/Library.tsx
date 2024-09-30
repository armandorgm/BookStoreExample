'use client'
import styles from './Library.module.css';
import Book from "./Book"; 
import { useState, useEffect } from 'react';
import ReadList from './readList';
import MainBookContainer from './mainBookContainer';
import BookFilters from "./book_filters"

 function Library ({booksSource}:{booksSource:iBook[]}){
    console.log("Library me reinicie")
    const [filteredBooks, setFilteredBooks] = useState<iBook[]>(booksSource);
    const [genreFilter, setGenreFilter] = useState<iGenre[]>([] );
    const [pagefilter, setPagefilter] = useState(999);
    const [booksElementInReadList, setBooksElementInReadList] = useState<typeof Book[]>([] );
    
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

    useEffect(() => {
        const result = booksSource.filter((book) =>  book.book.pages <= pagefilter && (genreFilter=="Todos"||genreFilter==""||book.book.genre == genreFilter));
        setFilteredBooks(result);
    }, [pagefilter,genreFilter,booksSource]); 
    
    return (
        <div className={styles.main}>
            <div>
                <BookFilters 
                    pagefilter={pagefilter} setPagefilter={setPagefilter} 
                    genreFilter={genreFilter} setGenreFilter={setGenreFilter}
                />
                <h1>{filteredBooks.length} libros disponibles</h1>
            </div>
            <div className={styles.mainContainer}>
                <MainBookContainer books={filteredBooks}/>
                <ReadList books={booksElementInReadList}/>
            </div>
        </div>
    )
 }
 export default Library
