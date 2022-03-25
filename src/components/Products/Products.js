import React from "react";
import Cart from "../Cart/Cart";
import Perfume from "../Perfume/Perfume";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <h1>The Perfume Shop</h1>
      <p>Welcome to the Fragrance World!</p>

      <div className="product-container">
        <Perfume></Perfume>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Products;
