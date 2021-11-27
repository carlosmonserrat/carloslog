import React, {useEffect} from 'react'
import Layout from "../../layout";
import {useQuery} from "../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {requestArticle} from "../../redux/actions";
import {useLocation} from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  blogPostDate,
  blogPostParagraph,
  blogPostTitle,
  blogPost
} from "./style.module.css";

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

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout classname={blogPost}>
      <h1 className={blogPostTitle}>{articleBody.title}</h1>
      <p className={blogPostDate}>{articleBody.createDate}</p>
      <img width="100%" src={articleBody.image} alt={articleBody.title}/>
      <p className={blogPostParagraph}>{articleBody.description}</p>
      <p className={blogPostParagraph}> {articleBody.content}</p>
      <SyntaxHighlighter language="scala" style={materialDark}>
 {
  `
d
            `
        }
      </SyntaxHighlighter>

    </Layout>
  )
}

export default ArticlePost