import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Selected Perfume:</h1>
      <div>
        <button className="cart-btn-one">CHOOSE 1 FOR ME</button>
        <button className="cart-btn-two">RESET</button>
      </div>
    </div>
  );
};

export default Cart;
