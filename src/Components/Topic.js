import React from 'react'

function Topic({title, articles}) {
  const renderArticles = () => {
    return "hello"
  }
  return (
    <div>
      {title}
      <br />
      {renderArticles()}
    </div>
  )
}

export default Topic
