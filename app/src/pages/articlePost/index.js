import React from 'react'
import {useLocation} from "react-router-dom";
import Layout from "../../layout";

const ArticlePost = () => {
  const location = useLocation();
  const article = location.state.article
  return (
    <Layout>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </Layout>

  )
}

export default ArticlePost