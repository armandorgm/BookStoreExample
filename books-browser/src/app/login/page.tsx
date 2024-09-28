'use client'
import { rejects } from "assert";
import style from "./page.module.css"
import { useRouter } from 'next/navigation';



export default function Login() {
    const router = useRouter()
    console.debug("estas en login page")
    const handleSubmit = (event:any) => {
       event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target.elements.username.value)
        console.log(event.target.username.value)
        console.log(event.target[1].value)
        console.log(event.target.elements.password.value)
        console.log(event.target.password.value)

        fetch('http://localhost:3010/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user:event.target.username.value,password:event.target.password.value})
          })
          .then((res)=>{
            if (!res.ok){
                console.log("clave Invalida")
                const elem = document.querySelector("form span")
                if (elem) {
                    elem.removeAttribute("hidden")
                    
                }
                throw new Error("Clave Invalida")
            }else{
                const elem = document.querySelector("form span")
                if (elem) elem.setAttribute("hidden", "hidden")
            return res.json()
            }
        }).then((res)=>{
            console.log(JSON.stringify(res));
            localStorage.setItem("token",res.token)
            router.push("/home")
        }).catch((err)=>{
            console.debug(err)
            /* setTimeout(()=>{
                router.push("/")
            },3000) */

          })

    }
  return (
    <main className={style.main}>
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" id="username"></input>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password"></input>
            <span className="pantalla" hidden>clave Invalida</span>

            <button type="submit">Log In</button>

            
        </form>
    </main>
  )
}
