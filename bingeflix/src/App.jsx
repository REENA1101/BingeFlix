import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import BingeFlix from './pages/BingeFlix'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import UserLiked from './pages/UserLiked'


export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="player" element={<Player/>} />
          <Route exact path="/movies" element={<Movies/>} />
          <Route exact path="/tv" element={<TvShows/>} />
          <Route exact path="/mylist" element={<UserLiked/>} />
          <Route exact path="/" element={<BingeFlix/>} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

