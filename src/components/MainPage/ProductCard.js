import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import styles from "./MainPage.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="product-card">
      <h2>我的足迹</h2>
      <Slider {...settings}>
        {product.map((card) => (
          <div key={card.id} className="product-card-slick">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
