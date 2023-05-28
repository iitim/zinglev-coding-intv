import React, { useState } from "react";
import Helmet from "react-helmet";
import styles from "./Calculation.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    // Logic to remove the product from the cart or perform other actions
  };

  return (
    <div className="cal-product-card">
      <div className="cal-product-image">
        <img src={product.image} alt={product.name} />
        <button className="cal-remove-button" onClick={removeProduct}>
          Remove
        </button>
      </div>
      <div className="cal-product-details">
        <h3>
          {product.brand}
          <br />
          {product.name}
          <br />
          {product.quantity}
        </h3>
        <p>AU{product.price}</p>
        <div className="cal-quantity-control">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </div>
  );
};

const Calculation = () => {
  const imgPath = process.env.PUBLIC_URL + "assets/img/5.0 Calculation/";
  const products = [
    {
      brand: "Nature’s Way",
      name: "Odourless Fish Oil",
      quantity: "2000mg 200",
      price: "$11.00 - $13.75",
      image: imgPath + "Odourless Fish Oil.png",
    },
    {
      brand: "Bio Island",
      name: "DHA for Kids",
      quantity: "100mg 60",
      price: "$7.50 - $10.95",
      image: imgPath + "DHA for Kids.png",
    },
    {
      brand: "Nature’s Way",
      name: "Kids Smart Calcium",
      quantity: "400mg 100",
      price: "$10.00 - $14.00",
      image: imgPath + "Kids Smart Calcium.png",
    },
  ];

  const handleAddToCart = () => {
    // Logic to add products to the cart or perform other actions
  };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #f8f8f8" }} />
      <Header />
      <h1 className="cal-topic">收藏表 “阿姨要”</h1>
      <div className="cal-product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <button className="cal-add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Calculation;
