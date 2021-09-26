import React from 'react'
import {useEffect} from "react";
import ItemArticle from "../../components/core/list_articles/item_article";
import Layout from "../../layout";
import Navigation from "../../components/core/navigation";
import {useDispatch, useSelector} from "react-redux";
import {requestArticles} from "../../redux/actions";
import Pagination from "../../components/core/pagination";

const MainPage = () => {
  const articlesBody = useSelector(state => state.articlesBody);
  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_API_URL
  const articlesUri= apiUrl+"/articles"

  const getNewArticles = (uri) => {
    dispatch(requestArticles(uri))
  }

  useEffect(() => {
    getNewArticles(articlesUri)
  }, [dispatch])

  return (
    <div>
      <Navigation/>
      <Layout>
        {articlesBody.articles.map(
          article =>
            <ItemArticle key={article.id} article={article}/>
        )}
      </Layout>
      <Pagination pagination={articlesBody.pagination} getNewPages={getNewArticles}/>
    </div>
  )
}

export default MainPage




