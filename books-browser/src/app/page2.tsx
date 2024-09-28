
import styles from './page.module.css'
import Library from "./components/Library";
import { useState, useEffect } from 'react';


export default async function Home() {

  let response = await fetch('http://localhost:3010/api/login',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({user:"admin",password:"admin"})
  });
  const token = (await response.json()).token;
  
  response = await fetch('http://localhost:3010/api/books',{
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
  },
  })
  const libraryJson = await response.json()
  //console.debug("main: "+JSON.stringify(libraryJson.library))
  return (
    <main className={styles.main}>
      {/* <h1>main</h1> */}
      <Library books={libraryJson.library}/>
    </main>
  )
}
