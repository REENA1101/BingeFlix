import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres, getuserlikedMovies } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';
import Card from '../components/Card';

export default function UserLiked(){
    const [isScrolled, setIsScrolled] = useState(false);
    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=>state.netflix.movies);
    const genres = useSelector((state)=>state.netflix.genres);
    const [email, setEmail] = useState(undefined);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate("/login");
      });
    
 
    useEffect(()=>{
     if(email){
        dispatch(getuserlikedMovies(email))
     }
    },[])
 
    useEffect(()=>{
       if(genresLoaded) {
         dispatch(fetchMovies
            ({ type:"movies"}));
   }
 },[genresLoaded]);

 window.onscroll = ()=>{
  setIsScrolled(window.pageYOffset===0 ? false : true);
  return ()=>(window.onscroll = null);
 }

    

    return <Container>
        <Navbar isScrolled = {isScrolled}/>
        <div className='content flex column'>
            <h1>My List</h1>

            <div className="grid flex">
               {movies.map((movie,index)=>{
                return <Card movieData={movie} index= {index} key = {movie.id} isLiked = {true}/>
               })}
            </div>
        </div>
    </Container>
}

const Container = styled.div`
`