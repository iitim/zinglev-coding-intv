import React from "react";
import Helmet from "react-helmet";
import styles from "./MainPage.scss";

import Header from "../Header/Header";
import Slider from "./Slider";
import ProductCard from "./ProductCard";

const imgRoot = process.env.PUBLIC_URL + "assets/img/";
const productCards = [
  {
    image:
      imgRoot +
      "3.2.2 New Products (Add to existing list)/bio-island-dha-kids@2x.jpg",
    title: "Bio Island DHA for Kids 100mg 60",
    price: "AU$7.50 - $10.95",
  },
  {
    image: imgRoot + "3.0 Main Page/blackmores-fish-oil@2x.png",
    title: "Blackmores Cold Relief Bio-C 1000mg 180",
    price: "AU$12.95 - $14.95",
  },
  {
    image:
      imgRoot +
      "3.2.2 New Products (Add to existing list)/bio-island-dha-kids@2x.jpg",
    title: "Nature’s Way Odourless Fish Oil 2000mg 200",
    price: "AU$11.00 - $13.75",
  },
  {
    image: imgRoot + "3.0 Main Page/blackmores-fish-oil@2x.png",
    title: "Bio Island DHA for Kids 100mg 60",
    price: "AU$7.50 - $10.95",
  },
];

const MainPage = (props) => (
  <div>
    <Helmet bodyAttributes={{ style: "background-color : #f8f8f8" }} />
    <Header />
    <Slider />
    <ProductCard product={productCards} />
  </div>
);

export default MainPage;
