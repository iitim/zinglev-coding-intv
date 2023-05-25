import React from "react";
import { slide as Burger } from "react-burger-menu";
import PropTypes from "prop-types";
import styles from "./Header.scss";

import Menu from "../Menu/Menu";
import Searchbar from "./Searchbar";

// const Header = props => (
// 	<div>This is a component called Header.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Burger>
          <Menu />
        </Burger>
        <img
          className="header-logo"
          src={
            process.env.PUBLIC_URL +
            "assets/img/3.0 Main Page/price cart logo@2x.jpg"
          }
          alt=""
        />

        <Searchbar />
      </div>
    );
  }
}

const HeaderPropTypes = {
  // always use prop types!
};

Header.propTypes = HeaderPropTypes;

export default Header;
