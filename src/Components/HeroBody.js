import React from 'react'
import { SignupForm } from '../Components'

function HeroBody() {
  return (
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <p className='title'>
          An AI Enhanced <br /> News Experience
        </p>
        <p className='subtitle'>
          Get tailored news sent straight <br /> to your inbox every morning
        </p>
        <SignupForm />
      </div>
    </div>
  )
}

export default HeroBody
