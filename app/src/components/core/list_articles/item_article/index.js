import React from 'react'
import {blogPostArticle, blogPostDate} from './style.css'

const ItemArticle = ({article}) => {
  return (
    <article className={blogPostArticle}>
      <h1>{article.title}</h1>
      <span className={blogPostDate}>{article.createDate}</span>
      <p>{article.description}</p>
    </article>
  )
}

export default ItemArticle