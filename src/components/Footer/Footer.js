import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.scss";

const logoPath =
  process.env.PUBLIC_URL +
  "assets/img/5.1 Calculation Result/price cart logo@2x.png";

const footerContent = [
  {
    title: "产品",
    dest: "/",
  },
  {
    title: "我的收藏表",
    dest: "/",
  },
  {
    title: "我的设置",
    dest: "/",
  },
];

const Footer = (props) => (
  <footer className="footer">
    <div className="footer-topic">
      <img className="footer-logo" src={logoPath} alt="" />
      <h2>海宝店</h2>
    </div>
    {footerContent.map((menu) => (
      <div className="footer-container">
        <Link to={menu.dest}>{menu.title}</Link>
      </div>
    ))}
    <div className="footer-line"></div>
  </footer>
);

export default Footer;
