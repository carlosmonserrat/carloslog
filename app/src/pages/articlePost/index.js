import React, {useEffect} from 'react'
import Layout from "../../layout";
import {useQuery} from "../../hooks";
import {useDispatch, useSelector} from "react-redux";
import {requestArticle} from "../../redux/actions";
import {useLocation} from "react-router-dom";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    blogPostDate,
    blogPostParagraph,
    blogPostTitle,
    blogPost,
    blogImage
} from "./style.module.css";
import ImageModal from "../../components/core/image_modal";

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
            <ImageModal imageUrl={articleBody.image}/>
            <p className={blogPostParagraph}>{articleBody.description}</p>
            <p className={blogPostParagraph}> {articleBody.content}</p>
            <SyntaxHighlighter language="scala" style={materialDark}>
                {
                    `
import akka.http.scaladsl.unmarshalling.Unmarshal
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import spray.json.DefaultJsonProtocol._

case class Pet(name: String)
implicit val petFormat = jsonFormat1(Pet)

val pet: Future[Pet] = Unmarshal(response).to[Pet]
`
                }
            </SyntaxHighlighter>
            <p className={blogPostParagraph}> {articleBody.content}</p>
        </Layout>
    )
}

export default ArticlePost