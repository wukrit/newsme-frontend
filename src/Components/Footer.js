import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <footer className='footer columns has-text-centered'>
      <div className='column'>
        Made with <br />
        <i class="fas fa-heart"></i> <br />
        by <a href='https://github.com/wukrit/' target='_blank'>Sukrit Walia</a>
      </div>
      <div className='column'>
        This project it open-source! <br />
        <a href='https://github.com/wukrit/newsme-frontend' target='_blank'><i class="fab fa-github-alt fa-lg"></i></a>
        <br />
        Check it out on github.
      </div>
      <div className='column'>
        Powered by <a href='https://newsapi.org/' target='_blank'>News API</a> <br />
        <i class="fas fa-plus"></i> <br />
        <a href='https://aylien.com/text-api/' target='_blank'>Aylien Text Analysis</a>
      </div>
    </footer>
  )
}

export default Footer
