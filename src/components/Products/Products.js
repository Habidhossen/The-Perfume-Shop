import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Perfume from "../Perfume/Perfume";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import "./Products.css";

const Products = () => {
  // set useSate products
  const [products, setProducts] = useState([]);
  // set useState for cart data
  const [cart, setCart] = useState([]);
  // new state for random num
  const [randomCart, setRandomCart] = useState([]);

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

  // handle random cart items
  const randomCartItems = () => {
    const randomItem = cart[Math.floor(Math.random() * cart.length)];
    setRandomCart(randomItem);
  };

  // handle reset cart button
  const resetCart = () => {
    setCart([]);
    setRandomCart([]);
  };

  return (
    <div>
      {/* header starts*/}
      <div className="header">
        <h1>The Perfume Shop</h1>
        <p>Welcome to the Fragrance World!</p>
      </div>
      {/* header ends*/}

      <div className="container">
        {/* product container starts */}
        <div className="product-container">
          {products.map((product) => (
            <Perfume
              key={product.id}
              product={product}
              handleAddToCartBtn={handleAddToCartBtn}
            ></Perfume>
          ))}
        </div>
        {/* product container ends */}

        {/* cart container starts */}
        <div className="cart-container">
          <h1 className="cart-title">Selected Perfume:</h1>

          <div className="cart-random-item">
            {/* <img className="cart-random-img" src={randomCart.image} alt="" /> */}
            <h5 className="cart-random-text">{randomCart.name}</h5>
            {/* <p>This is best choice for you</p> */}
          </div>
          {/* <h5>{randomCart.name}</h5> */}
          {cart.map((item) => (
            <Cart key={item.id} item={item}></Cart>
          ))}
          <div>
            <button onClick={() => randomCartItems()} className="cart-btn-one">
              CHOOSE 1 FOR ME
            </button>
            <button onClick={() => resetCart()} className="cart-btn-two">
              RESET
            </button>
          </div>
        </div>
        {/* cart container ends */}
      </div>

      {/* Question and Answer Component starts */}
      <QuestionAnswer></QuestionAnswer>
      {/* Question and Answer Component ends */}
    </div>
  );
};

export default Products;
