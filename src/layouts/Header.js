import React from "react";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";
import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="city" />} />
        <Route path="/products" render={() => <img src={img1} alt="city" />} />
        <Route path="/contacts" render={() => <img src={img2} alt="city" />} />
        <Route path="/admin" render={() => <img src={img3} alt="city" />} />
        <Route render={() => <img src={img3} alt="city" />} />
      </Switch>
    </>
  );
};

export default Header;
