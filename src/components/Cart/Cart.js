import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Selected Perfume:</h1>
      <div className="cart-items">
        <img
          className="cart-items-img"
          src="https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/10495844220958/Paco-Rabanne-Eau-de-Parfum-for-her-3349668528653-Olympea.jpg"
          alt=""
        />
        <h5 className="cart-items-text">Gentleman Reserve Privee</h5>
      </div>
      <div>
        <button className="cart-btn-one">CHOOSE 1 FOR ME</button>
        <button className="cart-btn-two">RESET</button>
      </div>
    </div>
  );
};

export default Cart;
