import React from 'react'
import {border, blogPostTitle, blogPostArticle, blogPostLink, blogPostDate, blogPostParagraph} from './style.module.css'
import {Link} from "react-router-dom";

const ItemArticle = ({article}) => {
  return (
    <article className={blogPostArticle}>
      <Link to={{
        pathname: "/article",
        search: `?id=${article.id}`,
      }} className={blogPostLink}>
        <div className={border}/>
        <h1 className={blogPostTitle}>{article.title}</h1>
        <span className={blogPostDate}>{article.createDate}</span>
        <p className={blogPostParagraph}>{article.description}</p>
      </Link>
    </article>
  )
}

export default ItemArticle