import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styles from "./UserAccount.scss";

const UserAccount = (props) => (
  <div>
    <Helmet bodyAttributes={{ style: "background-color : #f8f8f8" }} />
    <div className="plain-nav">
      <img
        className="plain-nav-logo"
        src={
          process.env.PUBLIC_URL +
          "assets/img/3.0 Main Page/price cart logo@2x.jpg"
        }
        alt=""
      />
    </div>
  </div>
);

const UserAccountPropTypes = {
  // always use prop types!
};

UserAccount.propTypes = UserAccountPropTypes;

export default UserAccount;
