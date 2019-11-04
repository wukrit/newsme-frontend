import React from 'react'

function Article({article}) {
  return (
    <div>
      <h3 className='is-size-4 has-text-weight-semibold'>
        {article.headline}
      </h3>
      <p>
        {article.body}
      </p>
    </div>
  )
}

export default Article
