import React from 'react'

function Article({article}) {
  return (
    <div>
      <h3 className='title'>
        {article.headline}
      </h3>
      <p>
        {article.body}
      </p>
    </div>
  )
}

export default Article
