import React from "react";
import "./Perfume.css";

const Perfume = (props) => {
  const { name, price, image } = props.product;

  return (
    <div className="card">
      <div>
        <img className="card-img" src={image} alt="" />
      </div>
      <h1 className="card-title">{name}</h1>
      <p className="card-price">Price: ${price}</p>
      <button className="card-btn">Add to Cart</button>
    </div>
  );
};

export default Perfume;
