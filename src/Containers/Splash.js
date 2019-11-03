import React from 'react'
import { HeroNav } from '../Components'

function Splash() {
  return (
    <>
      <section className='hero is-link is-fullheight-with-navbar'>
        <HeroNav />
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title'>
              An AI Enhanced <br /> News Experience
            </p>
            <p className='subtitle'>
              Get tailored news sent straight <br /> to your inbox every morning
            </p>
          </div>
        </div>

        <div className='hero-foot'>
          <div className='container has-text-centered'>
            <p className='title'>v</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Splash
