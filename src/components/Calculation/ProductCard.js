import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import styles from "./Calculation.scss";

const removeIcon = process.env.PUBLIC_URL + "assets/img/5.0 Calculation/";

const ProductCard = ({ product, onRemove }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    <div className="cal-product-card">
      <div className="cal-product-image">
        <img src={product.image} alt={product.name} />
        <div className="cal-product-remove" onClick={handleRemove}>
          <CgClose color="#81D0EB" />
          <p>取消收藏</p>
        </div>
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

export default ProductCard;
