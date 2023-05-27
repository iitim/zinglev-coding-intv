import React from "react";
import PropTypes from "prop-types";
import styles from "./MainPage.scss";

import Header from "../Header/Header";
import Slider from "./Slider";

const MainPage = (props) => (
  <div>
    <Header />
    <Slider />
  </div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.
// class MainPage extends React.Component {
//   render() {
//     return <div>This is a component called MainPage.</div>;
//   }
// }

const MainPagePropTypes = {
  // always use prop types!
};

MainPage.propTypes = MainPagePropTypes;

export default MainPage;
