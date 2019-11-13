import React from 'react'

function SplashBody() {
  return (
    <>
      <section className='section splash-body'>
        <p className='section-title'>No Need to Visit 100 Different Websites</p>
        <br />
        <div className='columns level'>
          <div className='column has-text-centered'>
            <p>
              NewsMe gathers the top headlines from hundreds of <br />global sources so
              you don't have to.
            </p>
          </div>
          <div className='column img-div'>
            <img
              src='/sources.png'
              alt='Examples of news sources include: Ars technica, Associated Press, Axios'
            />
          </div>
        </div>
      </section>
      <hr />
      <section className='section splash-body'>
        <p className='section-title'>
          AI That Reads Articles So You Don't Have To
        </p>
        <br />
        <div className='columns level'>
          <div className='column img-div'>
            <img
              src='/summarize.png'
              alt='Summarizing a large article into small bits.'
            />
          </div>
          <div className='column'>
            <p>
              We use natural language processing and artificial intelligence to
              summarize articles into digestable summaries. Now you can stay
              informed without having to read through hundreds of sentences.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className='section splash-body'>
          <p className='section-title'>
            Get the Top Headlines Delivered to Your Inbox
          </p>
        <div className='columns level'>
          <div className='column'>
            <p>
              NewsMe compiles your customized newsfeed into a convenient morning
              newsletter. The newsletter compiles the top headlines from the
              previous day from your subscribed topics.
            </p>
          </div>
          <div className='column img-div'>
            <img src='/newsletter.png' alt='Newsletter Icon'></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default SplashBody
