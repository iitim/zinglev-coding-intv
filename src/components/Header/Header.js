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
      </Burger>
    );
  }
}

const HeaderPropTypes = {
  // always use prop types!
};

Header.propTypes = HeaderPropTypes;

export default Header;
