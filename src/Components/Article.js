import React from 'react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

function Article({ article }) {
  return (
    <article className='media'>
      <div className='media-content'>
        <a href={article.url} target='_blank' rel='noopener noreferrer'>
          <h3 className='is-size-4 has-text-weight-semibold'>
            {article.headline}
          </h3>
        </a>
        <p>{article.body}</p>
        <span className='level-left share-btns is-link'>
          <FacebookShareButton url={article.url} quote={article.headline} hashtag='NewsMe'><i className="fab fa-facebook-f social-icon"></i></FacebookShareButton>
          <TwitterShareButton url={article.url} title={article.headline} hashtag='NewsMe'><i className="fab fa-twitter social-icon"></i></TwitterShareButton>
        </span>
      </div>
    </article>
  )
}

export default Article
