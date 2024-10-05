'use client'
import style from './Library.module.css';
import Book from "./Book"; 
import { useState, useEffect } from 'react';
import ReadList from './readList';
import BookFilters from "./book_filters"


function Library ({booksSource}:{booksSource:iBook[]}){
    const [filteredBooks, setFilteredBooks] = useState<iBook[]>(booksSource);
    const [genreFilter, setGenreFilter] = useState<iGenre>("Todos");
    const [pagefilter, setPagefilter] = useState(999);
    const [booksInReadList, setBooksInReadList] = useState<iCoreBook[]>([] );
    
    const onAvailableBookClick = ({book}:{book:iCoreBook}) => {
        const res = booksInReadList.find((bookInReadList)=>bookInReadList.ISBN ==book.ISBN)
        if (!res){
            setBooksInReadList((previousState)=>[...previousState,book])
            console.log("ejecutado")
        }else{
            console.log("No ejecutado")
            console.log(booksInReadList.map((book)=>book.ISBN))
            console.log(res.ISBN)
            console.log(book.ISBN)
        }
      };

    if (typeof window !== 'undefined') {
        console.log(`Library-receives: ${booksSource instanceof Array?"array of "+ booksSource.length:"not array type:"+typeof(booksSource)+" "+JSON.stringify(booksSource)}`)
    }
    const bookFilterFunction = (book:iCoreBook) =>  book.pages <= pagefilter && (genreFilter=="Todos"||book.genre == genreFilter)
    const iCoreBookToIBookFunction:bookMapperFunction = (book:iCoreBook) =>  {return {book,clickAction:onAvailableBookClick}}
    
    useEffect(() => {
        //const result = booksSource.filter((book) =>  book.book.pages <= pagefilter && (genreFilter=="Todos"||book.book.genre == genreFilter));
        const result = booksSource.map((book)=>book.book).filter(bookFilterFunction);
        setFilteredBooks(result.map(iCoreBookToIBookFunction));
    }, [pagefilter,genreFilter,booksSource]); 
    
    return (
        <div className={style.main}>
            <div className=''>
                <BookFilters 
                    pagefilter={pagefilter} setPagefilter={setPagefilter} 
                    genreFilter={genreFilter} setGenreFilter={setGenreFilter}
                />
            </div>
            <div className={style.mainContainer}>
                <div className={style.availableBooksContainer+" verticalContainer"}>
                    <h1>{filteredBooks.length-(booksInReadList.filter(bookFilterFunction)).length} libros disponibles</h1>
                    <div className={style.MainBookContainer}>
                        {filteredBooks.map((book:iBook,index)=>(<Book key={book.book.ISBN} book={book.book} clickAction={onAvailableBookClick}/>))}
                    </div>

                </div>
                <ReadList books={booksInReadList}/>
            </div>
        </div>
    )
 }
 export default Library
