import React from 'react'

function Article({ article }) {
  return (
    <article className='media'>
      <div className='media-content'>
        <h3 className='is-size-4 has-text-weight-semibold'>
          {article.headline}
        </h3>
        <p>{article.body}</p>
      </div>
    </article>
  )
}

export default Article
