import React from 'react'

function HeroNav() {
  return (
    <div className='hero-head'>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <span className='title'>NewsMe</span>
          </div>
          <div className='navbar-end is-hidden-touch'>
            <form className='field is-horizontal'>
              <input
                className='input is-small'
                name='email'
                type='email'
                placeholder='Email'
              />
              <input
                className='input is-small'
                name='password'
                type='password'
                placeholder='Password'
              />
              <input
                className='button is-small is-link'
                type='submit'
                value='Login'
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeroNav
