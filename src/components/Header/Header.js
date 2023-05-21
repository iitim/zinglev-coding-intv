import React from "react";
import { slide as Burger } from "react-burger-menu";
import { Divider, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./Header.scss";

import Menu from "../Menu/Menu";

// const Header = props => (
// 	<div>This is a component called Header.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.
class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Burger>
        <Menu />
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <Divider fitted />
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <Divider fitted />
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <Divider fitted />
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Burger>
    );
  }
}

const HeaderPropTypes = {
  // always use prop types!
};

Header.propTypes = HeaderPropTypes;

export default Header;
