import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";


export default function BingeFlix() {
   const [isScrolled, setIsScrolled] = useState(false);

   window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset===0 ? false : true);
    return ()=>(window.onscroll = null);
   }

  return (
    <div>
      <Navbar isScrolled={isScrolled}/>

      <div className="hero">
      <img 
        src ={backgroundImage} 
        alt ="background" 
        className="background-image"
      />

      <div className="container">
        <div className="logo">
           <img src={MovieLogo} alt="Movie Logo"/>
        </div>

        <div className="button flex">
          <button className="flex j-center a-center">
             <FaPlay/> Play
          </button>

          <button className="flex j-center a-center">
             <AiOutlineInfoCircle/> More Info
          </button>
        </div>
      </div>


      </div>
  
    </div>
  )
}
