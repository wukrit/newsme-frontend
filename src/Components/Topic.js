import React from 'react'
import { Article } from '../Components'

function Topic({ title, articles }) {
  const renderArticles = () => {
    if (Array.isArray(articles)) {
      console.log(articles)
      let articleArr = []
      articles.map(article => {
        articleArr.push(<Article articleObj={article} key={article.id} />)
      })
      return articleArr
    }
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
