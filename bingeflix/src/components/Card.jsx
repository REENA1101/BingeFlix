import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from "../assets/video.mp4"
import {IoPlayCircleSharp} from 'react-icons/io5';
import {RiThumbUpFill, RiThumbDownFill} from 'react-icons/ri';
import {BsCheck} from "react-icons/bs";
import {AiOutlinePlus} from 'react-icons/ai';
import {BiChevronDown} from 'react-icons/bi';

export default function Card({movieData, isLiked=false}) {
   const [isHovered, setIsHovered] = useState(false);
   const navigate = useNavigate()

  return (
    <Container onMouseEnter={()=> setIsHovered(true)}
               onMouseLeave={()=> setIsHovered(false)}>
        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie"/>

        {isHovered&& (
            <div className= "hover">
                <div  className='image-vide-container'>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                      alt=""
                      onClick={()=>navigate('/player')}
                    />
                   
                   <video 
                   src={video}
                    autoPlay
                     loop
                      muted
                       onClick={()=>navigate('/player')}
                   />
                </div>

               <div className='.info-container flex column'>
                  <h3 className='name' onClick={()=> navigate('/player')}>
                    {movieData.name}
                  </h3>

                  <div className='icons flex j-between'>
                  <div className='constrols flex'>
                    <IoPlayCircleSharp 
                        title="play"
                        onClick={()=> navigate('/player')}
                     />
                     <RiThumbUpFill title="like"/>
                     <RiThumbDownFill title="Dislike"/>
                     {
                        isLiked ?(
                          <BsCheck title = "Remove From List"/>
                        ):(
                          <AiOutlinePlus title="Add To my List"/>
                        )
                     }
                  </div>
                       <div className="info">
                           <BiChevronDown title="More Info"/>
                       </div>
                </div>

                <div className="genres flex">
                    <ul className="flex">{movieData.genres.map((genre)=>{
                           <li key={genre}>{genre}</li>
                    })}
                    </ul>
                </div>
            </div> 
        </div>
        )}
    </Container>
  )
}

const Container = styled.div`
max-width: 230px;
width: 230px;
height:100%;
cursor:pointer;
position:relative;
img{
    border-radius:0.2rem;
    width:100%;
    height:100%;
    z-index:10;
}
.hover{
    z-index: 90;
    height: max-content;
    width: 20rem;
    position:absolute;
    top: -18vh;
    left:0;
    
}
`;
