import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png"
import {FaPowerOff, FaSearch} from "react-icons/fa"
import { firebaseAuth } from '../utils/firebase-config';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Navbar({isScrolled}) {
    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);

   const links = [
    { name: "Home", link:"/"},
    { name: "Tv Shows", link:"/tv"},
    { name: "Movies", link:"/movies"},
    { name: "My List", link:"/mylist"}
];

  return (
    <Container>
        <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
          <div className="left flex a-center">
            <div className="brand flex a-center j-center">
                <img src={logo} alt="logo"/>
            </div>
            <ul className="links flex">
            {
                links.map(({name, link}) => {
                    return (
                    <li key={name}>
                       <Link to={link}>{name}</Link>
                    </li>
                )
              })}
            </ul>
        </div>
        <div className= "right flex a-center">
             <div className={`search ${showSearch ? "show-search" : ""}`}>
                <button 
                    onFocus = {()=>setShowSearch(true)} 
                    onBlur = {()=>{
                        if(!inputHover){
                         setShowSearch(false);
                        }
                    }}>
                    <FaSearch/>
                </button>
                <input 
                    type= "text"
                    placeholder = "Search"
                    onMouseEnter={()=>setInputHover(true)}
                    onMouseLeave={()=>setInputHover(false)}
                    onBlur = {()=>{
                        setShowSearch(false)  
                        setInputHover(false)
                  }}
                />
             </div>
             <button onClick = {()=>signOut(firebaseAuth)}>
                <FaPowerOff/>
             </button>
        </div>
        </nav>
    </Container>
  )
}

const Container = styled.div`
   .scrolled{
      background-color: black;
   }
   nav{
    position: sticky;
    top: 0;
    height: 6.5%;
    width: 50px;
      .left{
        height: 4rem;
      }
   }
`
