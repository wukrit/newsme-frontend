import React from 'react'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share'

function Article({ article }) {
  Array.prototype.unique = function() {
    return this.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
  }

  return (
    <article className='media'>
      <div className='media-content'>
        <a href={article.url} target='_blank' rel='noopener noreferrer'>
          <h3 className='is-size-4 has-text-weight-semibold'>
            {article.headline}
          </h3>
        </a>
        <ul className='content'>
          {article.body.split("\n").unique().map(sentence => {
            return sentence !== "" && sentence !== "CLOSE" && sentence.toUpperCase() !== sentence ? <li className='content'>{sentence}</li> : null
          })}
        </ul>
        <span className='level-left share-btns is-link'>
          <FacebookShareButton url={article.url} quote={article.headline} hashtag='NewsMe'><i className="fab fa-facebook-f social-icon"></i></FacebookShareButton>
          <TwitterShareButton url={article.url} title={article.headline} hashtag='NewsMe'><i className="fab fa-twitter social-icon"></i></TwitterShareButton>
          <LinkedinShareButton url={article.url}><i className="fab fa-linkedin-in social-icon"></i></LinkedinShareButton>
        </span>
      </div>
    </article>
  )
}

export default Article
