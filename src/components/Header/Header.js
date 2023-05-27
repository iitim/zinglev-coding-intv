import React from "react";
import { slide as Burger } from "react-burger-menu";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.scss";

import Menu from "../Menu/Menu";
import Searchbar from "./Searchbar";

class Header extends React.Component {
  render() {
    return (
      <div className="nav">
        <Burger>
          <Menu />
        </Burger>
        <img
          className="nav-logo"
          src={
            process.env.PUBLIC_URL +
            "assets/img/3.0 Main Page/price cart logo@2x.jpg"
          }
          alt=""
        />

        <Searchbar />
        <Link to="/login">
          <FiUser color="#23DAC6" className="nav-user" />
        </Link>
      </div>
    );
  }
}

const HeaderPropTypes = {
  // always use prop types!
};

Header.propTypes = HeaderPropTypes;

export default Header;
