import React, {useEffect} from 'react'
import ItemArticle from "../../components/core/list_articles/item_article";
import Layout from "../../layout";
import {useDispatch, useSelector} from "react-redux";
import {requestArticles} from "../../redux/actions";
import Pagination from "../../components/core/pagination";
import {mainPage} from "./style.module.css";

const MainPage = () => {
  const articlesBody = useSelector(state => state.articlesBody);
  const apiUrl = process.env.REACT_APP_API_URL
  const articlesUri = apiUrl + "/articles"
  const dispatch = useDispatch();
const ggg= ""
  const getNewArticles = (uri) => {
    dispatch(requestArticles(uri))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(requestArticles(articlesUri))
    console.log("s " + articlesUri)
  }, []);

  return (
    <div>
      <div className={mainPage}>
        <Layout>
          {articlesBody.articles.map(
            article =>
              <ItemArticle key={article.id} article={article}/>
          )}
        </Layout>
      </div>
      <Pagination pagination={articlesBody.pagination} getNewPages={getNewArticles}
                  scrollY={document.getElementById("main")}/>
    </div>
  )
}

export default MainPage




