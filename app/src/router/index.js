import MainPage from "../pages/main";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "../components/core/navigation";
import About from "../pages/about";
import ArticlePost from "../pages/articlePost";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/article" element={<ArticlePost/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router