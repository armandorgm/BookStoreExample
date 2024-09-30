'use client'

import Library from "../components/Library"
import { useEffect, useState } from "react";

export  default function Main() {
    const [books,setBooks]=useState<iBook[]>([])
    useEffect(()=>{
        let books:iBook[] = []
        let token = null
        
        if (typeof window !== 'undefined') {
            token = localStorage.getItem('token');
            console.log("token home:"+token)
            fetch('http://localhost:3010/api/books',{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res)=> res.json())
            .then((res:iLibrary)=>{
                books=res.library;
                console.log("res: "+JSON.stringify(res))
                console.log(`home-receives: ${books instanceof Array?"array of "+ books.length:"not array"}`)
                setBooks(books)
                console.log("books asentandose")
                console.log("books: "+(books instanceof Array?"array of "+ books.length:"not array"))
            })
            console.log("devolviendo Library as "+(books instanceof Array?"array of "+ books.length:"not array"))
        }
    },[])

    useEffect(()=>{
        console.log(`home: booksArray ha cambiado ${books instanceof Array?"array of "+ books.length:"not array"}`)
    },[books])
    
    return (
        <div>
            <Library booksSource={books} />
        </div>
    )
}
