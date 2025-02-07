import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import ProductListPage from "../pages/ProductListPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/product/:name" component={ProductPage} />
        <Route path="/contacts" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
