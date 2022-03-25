import React from "react";
import "./Perfume.css";

const Perfume = () => {
  return (
    <div className="card">
      <div>
        <img
          className="card-img"
          src="https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/10935595270174/Ralph-Lauren-Eau-de-Toilette-for-him-3605970416003-Polo-Red.jpg"
          alt=""
        />
      </div>
      <h1 className="card-title">Sauvage Elixir</h1>
      <p className="card-price">Price: $99.99</p>
      <button className="card-btn">Add to Cart</button>
    </div>
  );
};

export default Perfume;
