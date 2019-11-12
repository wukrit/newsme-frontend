import React from 'react'
import { HeroNav, HeroBody, HeroFoot, Footer, SplashBody } from '../Components'
import '../Styles/Splash.css'

function Splash() {
  return (
    <>
      <section className='hero is-link is-fullheight-with-navbar is-centered'>
        <HeroNav />
        <HeroBody />
        <HeroFoot />
      </section>
      <br />
      <SplashBody />
      <Footer />
    </>
  )
}

export default Splash
