import React from 'react'
import {border, blogPostTitle, blogPostArticle, blogPostLink, blogPostDate, blogPostParagraph} from './style.module.css'


const ItemArticle = ({article}) => {
  return (
    <article className={blogPostArticle}>
      <a href="#" className={blogPostLink}>
        <div className={border}/>
        <h1 className={blogPostTitle}>{article.title}</h1>
        <span className={blogPostDate}>{article.createDate}</span>
        <p className={blogPostParagraph}>{article.description}</p>
      </a>
    </article>
  )
}

export default ItemArticle