import React, {useEffect} from 'react'
import Layout from "../../layout";
import {useQuery} from "../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {requestArticle} from "../../redux/actions";
import {useNavigate} from "react-router-dom";
import {blogPost} from "./style.module.css";
import {textEnrich} from "./contentTextEnricher";

const ArticlePost = () => {

  const query = useQuery();
  const navigate = useNavigate();
  const id = query.get("id")
  const apiUrl = process.env.REACT_APP_API_URL
  const articlesUri = apiUrl + `/article?id=${id}`
  const dispatch = useDispatch();
  const articleBody = useSelector(state => state.articleBody);
  const enrichedText = textEnrich(articleBody.content)

  useEffect(() => {
    dispatch(requestArticle(articlesUri))
  }, [dispatch, articlesUri])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBackPage = () => {
    navigate(-1)
  }

  return (
    <Layout classname={blogPost}>
      <button onClick={goBackPage}>go back</button>
      {enrichedText}
    </Layout>
  )
}

export default ArticlePost