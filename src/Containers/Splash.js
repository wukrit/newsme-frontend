import React from 'react'
import { HeroNav, HeroBody, HeroFoot } from '../Components'

function Splash() {
  return (
    <>
      <section className='hero is-link is-fullheight-with-navbar'>
        <HeroNav />
        <HeroBody />
        <HeroFoot />
      </section>

    </>
  )
}

export default Splash
