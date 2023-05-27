import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";

const Searchbar = (props) => (
  <div className="nav-search-container">
    <input className="nav-search-input" placeholder="产品/商店 搜寻" />
    <button className="nav-search-icon">
      <AiOutlineSearch
        color="#23DAC6"
        style={{ height: "20px", width: "20px" }}
      />
    </button>
  </div>
);

Searchbar.propTypes = {};

export default Searchbar;
