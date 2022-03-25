import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Perfume from "../Perfume/Perfume";
import "./Products.css";

const Products = () => {
  // set useSate product
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

  // handle reset cart button
  // another method: const initialState = [];
  const resetCart = () => {
    setCart([]);
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
          {cart.map((item) => (
            <Cart key={item.id} item={item}></Cart>
          ))}
          <div>
            <button className="cart-btn-one">CHOOSE 1 FOR ME</button>
            <button onClick={() => resetCart()} className="cart-btn-two">
              RESET
            </button>
          </div>
        </div>
        {/* cart container ends */}
      </div>
    </div>
  );
};

export default Products;
