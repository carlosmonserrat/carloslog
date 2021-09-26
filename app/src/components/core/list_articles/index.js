import React from 'react'
import ItemArticle from "./item_article";

const ListArticles = (articles) => {
  return (
    <div>
      {articles.map(article => <ItemArticle article={article}/>)}
    </div>
  )
}

export default ListArticles