import React from 'react'
import styled from "styled-components"
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { useState } from 'react'
import {firebaseAuth} from "../utils/firebase-config"
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Login() {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const navigate = useNavigate();



  const handleLogIn = async()=>{
       try{
            await signInWithEmailAndPassword(firebaseAuth, email, password)
       } catch(err){
        console.log(err)
       }
  }

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (currentUser)=>{
      if(currentUser) {
        navigate("/")
      }
    })
  }, [])
 

  return (
    <Container > 
      <BackgroundImage/>
         <div className="content">
            <Header/>
            <div className="form-container flex-container a-center j-center">
            <div className="form flex column a-center j-center">
              <div className = "title">
                 <h3>Login</h3>
              </div>

              <div className="container flex column" >
                  <input 
                      type="text"
                      placeholder = "Email"
                      value = {email}
                      onChange = {(e)=>setEmail({
                          [e.target.name]: e.target.value, 
                    }
                  )}
               />  
                  <input 
                      type="password"
                       placeholder = "Password"
                       value={password}
                          onChange = {(e)=>setPassword({
                            [e.target.name]: e.target.value, 
                    }
                  )}
              />
                    <button onClick={handleLogIn}>Log In</button>
              </div>
            </div>
         </div>
      </div>    
      
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body{
        gap: 1rem;
    }
    .text{
       gap: 1rem;
       text-align: center;
       font-size: 1.5rem;
    }
    h1{
        padding: 0 25rem;
    }
  }
  .form{
    display: grid;
    grid-template-columns: ${({showPassword})=>showPassword ? "1fr 1fr" : "2fr 1fr"};
    width: 60%;
    input{
       color: black;
       border: none;
       padding: 1rem;
       font-size: 1rem;
       border: 1px black solid;
       &:focus{
        outline: none;
       }
    }
    button{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        border-radius: 0.2rem;
        font-size: 1.05rem;
    }
  }
  button{
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`
