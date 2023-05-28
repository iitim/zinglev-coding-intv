import React, { useState } from "react";
import Helmet from "react-helmet";
import styles from "./Calculation.scss";

import Header from "../Header/Header";
import ProductCard from "./ProductCard";
import Footer from "../Footer/Footer";

const Calculation = () => {
  const imgPath = process.env.PUBLIC_URL + "assets/img/5.0 Calculation/";
  const [products, setProducts] = useState([
    {
      id: 1,
      brand: "Nature’s Way",
      name: "Odourless Fish Oil",
      quantity: "2000mg 200",
      price: "$11.00 - $13.75",
      image: imgPath + "Odourless Fish Oil.png",
    },
    {
      id: 2,
      brand: "Bio Island",
      name: "DHA for Kids",
      quantity: "100mg 60",
      price: "$7.50 - $10.95",
      image: imgPath + "DHA for Kids.png",
    },
    {
      id: 3,
      brand: "Nature’s Way",
      name: "Kids Smart Calcium",
      quantity: "400mg 100",
      price: "$10.00 - $14.00",
      image: imgPath + "Kids Smart Calcium.png",
    },
  ]);

  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #f8f8f8" }} />
      <Header />
      <h1 className="cal-topic">收藏表 “阿姨要”</h1>
      <div className="cal-product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={handleRemoveProduct}
          />
        ))}
        <button className="cal-best-price-button">显示合并价格</button>
      </div>
      <Footer />
    </div>
  );
};

export default Calculation;
