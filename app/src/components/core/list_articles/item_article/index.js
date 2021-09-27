import React from 'react'
import './style.css'

const ItemArticle = ({article}) => {
  return (
    <article className={"blogPostArticle"}>
      <a href="#" className={"blogPostLink"}>
        <h1>{article.title}</h1>
      </a>
      <span className={"blogPostDate"}>{article.createDate}</span>
      <p className={"blogPostParagraph"}>{article.description}</p>
    </article>
  )
}

export default ItemArticle