import React, {useEffect} from 'react'
import Layout from "../../layout";
import {useQuery} from "../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {requestArticle} from "../../redux/actions";

const ArticlePost = () => {
  const query = useQuery();
  const id = query.get("id")
  const apiUrl = process.env.REACT_APP_API_URL
  const articlesUri = apiUrl + `/article?id=${id}`
  const dispatch = useDispatch();

  const articleBody = useSelector(state => state.articleBody);

  useEffect(() => {
    dispatch(requestArticle(articlesUri))
  }, [dispatch, articlesUri])

  return (
    <Layout>
      <h1>{articleBody.title}</h1>
      <img width="100%" src={articleBody.image} alt=""/>
      <p> {articleBody.description}</p>
      <p> {articleBody.content}</p>
    </Layout>
  )
}

export default ArticlePost