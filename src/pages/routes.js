import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

// pages
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Article from "./Article/Article";

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  create: "/create",
  settings: "/settings",
  article: "/article/:slug"
};

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.login} component={Login} />
      <Route path={routes.register} component={Register} />
      <Route path={routes.article} component={Article} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Router;
