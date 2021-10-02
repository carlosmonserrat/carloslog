import MainPage from "../pages/main";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "../components/core/navigation";
import About from "../pages/about";
import ArticlePost from "../pages/articlePost";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/about" exact component={About}/>
        <Route path="/article" exact component={ArticlePost}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router