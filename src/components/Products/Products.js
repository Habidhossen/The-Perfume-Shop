import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Perfume from "../Perfume/Perfume";
import "./Products.css";

const Products = () => {
  // set useSate
  const [products, setProducts] = useState([]);

  // set useEffect
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="header">
        <h1>The Perfume Shop</h1>
        <p>Welcome to the Fragrance World!</p>
      </div>
      <div className="container">
        <div className="product-container">
          {products.map((product) => (
            <Perfume key={product.id} product={product}></Perfume>
          ))}
        </div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Products;
