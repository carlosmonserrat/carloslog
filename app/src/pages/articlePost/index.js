import React, {useEffect} from 'react'
import Layout from "../../layout";
import {useQuery} from "../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {requestArticle} from "../../redux/actions";
import {useLocation} from "react-router-dom";
import {blogPost} from "./style.module.css";

import {textEnrich} from "./contentTextEnricher";

const ArticlePost = () => {

  const query = useQuery();
  const id = query.get("id")
  const apiUrl = process.env.REACT_APP_API_URL
  const articlesUri = apiUrl + `/article?id=${id}`
  const dispatch = useDispatch();
  const articleBody = useSelector(state => state.articleBody);
  const enrichedText = textEnrich(articleBody.content)

  useEffect(() => {
    dispatch(requestArticle(articlesUri))
  }, [dispatch, articlesUri])

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout classname={blogPost}>
      {enrichedText}
    </Layout>
  )
}

export default ArticlePost