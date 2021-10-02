import MainPage from "../pages/main";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "../components/core/navigation";
import About from "../pages/about";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router