import React from 'react'
import { SignupForm } from '../Components'

function HeroBody() {
  return (
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <div className='main-box'>
          <p className='title is-blue'>
            An AI Enhanced <br /> News Experience
          </p>
          <p className='subtitle is-blue'>
            Get tailored news sent straight <br /> to your inbox every morning
          </p>
          <br />
        </div>
        <SignupForm />
      </div>
    </div>
  )
}

export default HeroBody
