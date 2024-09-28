'use client'

import { stringify } from "querystring";
import Library from "../components/Library"
import { useEffect, useState } from "react";

export  default function Main() {
    const [booksArray,setBooksArray]=useState([])
    useEffect(()=>{
        let books = []
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
            .then((res)=>{
                books=res;
                console.log(`home-receives: ${books.library instanceof Array?"array of "+ books.library.length:"not array"}`)
                setBooksArray(books.library)
                console.log("books asentandose")
                console.log("books: "+(booksArray instanceof Array?"array of "+ booksArray.length:"not array"))
            })
            console.log("devolviendo Library as "+(booksArray instanceof Array?"array of "+ booksArray.length:"not array"))
        }
    },[])

    useEffect(()=>{
        console.log(`home: booksArray ha cambiado ${booksArray instanceof Array?"array of "+ booksArray.length:"not array"}`)
    },[booksArray])
    
    return (
        <div>
            <Library booksSource={booksArray} />
        </div>
    )
}
