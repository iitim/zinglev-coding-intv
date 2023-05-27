import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./MainPage.scss";

const imgRoot = process.env.PUBLIC_URL + "assets/img/3.0 Main Page/";
const data = [
  {
    image: imgRoot + "Carousel.png",
    description: "Carousel 1",
  },
  {
    image: imgRoot + "Carousel.png",
    description: "Carousel 2",
  },
  {
    image: imgRoot + "Carousel.png",
    description: "Carousel 3",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={true}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={slide.description}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
