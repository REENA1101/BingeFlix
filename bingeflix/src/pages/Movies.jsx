import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';

export default function Movies() {
    const [isScrolled, setIsScrolled] = useState(false);
    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=>state.netflix.movies);
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    useEffect(()=>{
       dispatch(getGenres())
    },[])
 
    useEffect(()=>{
       if(genresLoaded) {
         dispatch(fetchMovies
            ({ type:"all"}));
   }
 }, [genresLoaded]);
 
    window.onscroll = ()=>{
     setIsScrolled(window.pageYOffset===0 ? false : true);
     return ()=>(window.onscroll = null);
    }
  return (
    <div>Movies</div>
  )
}
