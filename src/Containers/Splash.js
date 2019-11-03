import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

export default function Splash() {
  return (
    <>
      <section className='hero is-link is-fullheight-with-navbar'>
        <div className='hero-head'>
          <nav className='navbar'>
            <div className='container'>
              <div className='navbar-brand'>
                <span className='title'>NewsMe</span>
              </div>
            </div>
          </nav>
        </div>

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
