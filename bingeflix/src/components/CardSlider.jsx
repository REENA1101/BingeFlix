import React, { useState, useRef } from 'react'
import Card from './Card'
import styled from 'styled-components';
import { AiFillAccountBook, AiOutlineLeft } from 'react-icons/ai';

export default function CardSlider({data,title}) {
   const [showControls, setShowControls] = useState(false);
   const [sliderPosition, setSliderPosition] = useSatte(0);
   const listRef = useRef();

   const handleDirection=(direction)=>{

   }



  return (
    <Container className='flex column'
        onMouseEnter={()=>setShowControls(true)}
        onMouseLeave={()=>setShowControls(false)}
    >
        <h1>{title}</h1>
        <div className="wrapper">
            <div className={`slider-action left ${
                !showControls ? "none" : ""
                } flex j-center a-center`}
                >
                    <AiOutlineLeft onClick={()=>handleDirection("left")}/>
                </div>

            <div className='flex slider' ref={listRef}>
              {
                data.map((movie,index)=>{
                    return <Card movieData={movie} index={index} key = {movie.id}/>
                })
              }
        </div>
        </div>
       
      
    </Container>
  )
}

const Container = styled.div`
`;
