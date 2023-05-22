import React from "react";
import { Grid } from "semantic-ui-react";
import styles from "./Menu.scss";

import { MenuSingle, MenuDouble } from "./MenuType";

const Menu = (props) => (
  <Grid divided="vertically">
    <MenuSingle menuLoc="0" menuName="欢迎来到海宝店" />
    <MenuSingle menuLoc="1" menuName="商品分类" />
    <MenuDouble
      menuDoubleInfo={[
        { imgName: "man@2x", menuName: "男性健康" },
        { imgName: "woman@2x", menuName: "女性保养" },
      ]}
    />
    <MenuDouble
      menuDoubleInfo={[
        { imgName: "elderly@2x", menuName: "中老年健康" },
        { imgName: "child@2x", menuName: "宝贝营养" },
      ]}
    />
    <MenuDouble
      menuDoubleInfo={[
        { imgName: "skincare@2x", menuName: "护肤护理" },
        { imgName: "milk@2x", menuName: "儿童成人奶粉" },
      ]}
    />
    <MenuSingle menuLoc="2" menuName="我的收藏表" />
    <MenuSingle menuLoc="2" menuName="我的过去参考价格" />
    <MenuSingle menuLoc="2" menuName="我的关注商店" />
    <MenuSingle menuLoc="2" menuName="我的设置" />
    <MenuSingle menuLoc="3" menuName="安全登出" />
  </Grid>
);

export default Menu;
