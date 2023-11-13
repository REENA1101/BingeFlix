import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import BingeFlix from './pages/BingeFlix'

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/" element={<BingeFlix/>} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

