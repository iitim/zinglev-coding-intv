import React from "react";
import { Grid, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./Menu.scss";

import { MenuSingle } from "./MenuType";

const Menu = (props) => (
  <Grid divided="vertically">
    <MenuSingle menuLoc="0" menuName="欢迎来到海宝店" />
    <MenuSingle menuLoc="1" menuName="商品分类" />

    <Grid.Row columns={2}>
      <Grid.Column className="menu-double-item">
        <p className="menu-item">男性健康</p>
      </Grid.Column>
      <Grid.Column className="menu-double-item">
        <p className="menu-item">女性保养</p>
      </Grid.Column>
      <hr class="menu-hr"></hr>
    </Grid.Row>

    <MenuSingle menuLoc="2" menuName="我的收藏表" />
    <MenuSingle menuLoc="2" menuName="我的过去参考价格" />
    <MenuSingle menuLoc="2" menuName="我的关注商店" />
    <MenuSingle menuLoc="2" menuName="我的设置" />
    <MenuSingle menuLoc="3" menuName="安全登出" />
  </Grid>
);

const MenuPropTypes = {
  // always use prop types!
};

Menu.propTypes = MenuPropTypes;

export default Menu;
