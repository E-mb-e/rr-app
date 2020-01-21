import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = ({ match }) => {
  console.log(match);
  return (
    <>
      <div> Strona produktu </div>
      <Product name={match.params.name} />
      <Link to="/products"> Powrót do strony produktów </Link>
    </>
  );
};

export default ProductPage;
