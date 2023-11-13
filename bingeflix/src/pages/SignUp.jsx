import React from 'react'
import styled from "styled-components"
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

export default function SignUp() {
  return (
    <Container>
        <BackgroundImage/>
        <Header/>

        <div className= "body flex column a-center j-center">
          <div className= "text flex column">
          <h1>Unlimited movies, TV Shows and More</h1>
          <h4>Watch anywhere. Cancel anytime</h4>
          <h6>Ready to Watch? Enter your e-mail or create or restart memebership</h6>
          </div>

          <div className = "form">
              <input type="email" placeholder = "Emial Address" name="email"/>
              <input type="password" placeholder = "Password" name="password"/>
              <button>Get Started</button>
          </div>

          <button>Log In</button>
         
        </div>
    </Container>
  )
}

const Container = styled.div`
`
