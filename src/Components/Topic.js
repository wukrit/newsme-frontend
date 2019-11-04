import React from 'react'
import { Article } from '../Components'

function Topic({ title, articles }) {
  const renderArticles = () => {
    if (Array.isArray(articles)) {
      let articleArr = []
      articles.map(article =>
        articleArr.push(<Article article={article} key={article.id} />)
      )
      return articleArr
    }
  }
  return (
    <div>
      <h2 className='title'>{title}</h2>
      {renderArticles()}
      <br />
    </div>
  )
}

export default Topic
