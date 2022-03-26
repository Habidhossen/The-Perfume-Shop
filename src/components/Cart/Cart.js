import React from "react";
import "./Cart.css";

const Cart = ({ item }) => {
  const { name, image } = item;

  return (
    <div>
      <div className="cart-items">
        <img className="cart-items-img" src={image} alt="" />
        <h5 className="cart-items-text">{name}</h5>
      </div>
    </div>
  );
};

export default Cart;
