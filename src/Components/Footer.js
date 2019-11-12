import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <footer className='footer columns has-text-centered'>
      <div className='column'>
        Made with <br />
        <a
          href='https://github.com/wukrit/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fas fa-heart'></i> <br />
          by Sukrit Walia
        </a>
      </div>
      <div className='column'>
        This project is open-source <br />
        <a
          href='https://github.com/wukrit/newsme-frontend'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github-alt fa-lg'></i>
          <br />
          Check it out on github.
        </a>
      </div>
      <div className='column'>
        Powered by{' '}
        <a
          href='https://newsapi.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          News API
        </a>{' '}
        <br />
        <i className='fas fa-plus'></i> <br />
        <a
          href='https://aylien.com/text-api/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Aylien Text Analysis
        </a>
      </div>
    </footer>
  )
}

export default Footer
