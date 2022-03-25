import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Perfume from "../Perfume/Perfume";
import "./Products.css";

const Products = () => {
  // set useSate
  const [products, setProducts] = useState([]);
  // set useState for cart data
  const [cart, setCart] = useState([]);

  // set useEffect
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handle add to cart button
  const handleAddToCartBtn = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      {/* header */}
      <div className="header">
        <h1>The Perfume Shop</h1>
        <p>Welcome to the Fragrance World!</p>
      </div>
      <div className="container">
        {/* product container */}
        <div className="product-container">
          {products.map((product) => (
            <Perfume
              key={product.id}
              product={product}
              handleAddToCartBtn={handleAddToCartBtn}
            ></Perfume>
          ))}
        </div>
        {/* cart container */}
        <div className="cart-container">
          <h1 className="cart-title">Selected Perfume:</h1>
          {cart.map((item) => (
            <Cart key={item.id} item={item}></Cart>
          ))}
          <div>
            <button className="cart-btn-one">CHOOSE 1 FOR ME</button>
            <button className="cart-btn-two">RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
