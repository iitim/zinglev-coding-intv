import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";

const Searchbar = (props) => (
  <div className="nav-search-container">
    <input className="nav-search-input" />
    <button className="nav-search-icon">
      <AiOutlineSearch size={22} />
    </button>
  </div>
);

Searchbar.propTypes = {};

export default Searchbar;
