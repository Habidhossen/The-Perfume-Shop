import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Perfume.css";

const Perfume = (props) => {
  const { name, price, image } = props.product;

  return (
    <div className="card">
      <div className="card-image-bg">
        <img className="card-img" src={image} alt="" />
      </div>
      <h1 className="card-title">{name}</h1>
      <p className="card-price">
        Price: <b>${price}</b>
      </p>
      <button className="card-btn">
        Add to Cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Perfume;
