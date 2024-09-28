'use client'
import styles from './page.module.css'
import Library from "./components/Library";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      const response = fetch('http://localhost:3010/api/books',{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then((res)=>{
        if(!res.ok){
          console.debug(`token:${token}`)
          router.push("/login")
        }else{
          router.push("/home")
        }
      })      
    }
  });
  return (
  <div>
  </div>)
  
}
