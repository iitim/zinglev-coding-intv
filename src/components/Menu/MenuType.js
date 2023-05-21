import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./Menu.scss";

function MenuSingle({ menuLoc, menuName }) {
  const isDividerShown = menuLoc != 0;
  const classLoc = {
    0: "menu-topic",
    1: "menu-desc",
    2: "menu-item",
    3: "menu-signout",
  };

  return (
    <Grid.Column>
      <p className={classLoc[menuLoc]}>{menuName}</p>
      {isDividerShown ? <hr class="menu-hr"></hr> : null}
    </Grid.Column>
  );
}

function MenuDouble() {
  return (
    <Grid.Row columns={2}>
      <Grid.Column className="menu-double-item">
        <p className="menu-item">男性健康</p>
      </Grid.Column>
      <Grid.Column className="menu-double-item">
        <p className="menu-item">女性保养</p>
      </Grid.Column>
      <hr class="menu-hr"></hr>
    </Grid.Row>
  );
}

MenuSingle.propTypes = {
  menuLoc: PropTypes.number.isRequired,
  menuName: PropTypes.string.isRequired,
};

const MenuDoublePropTypes = {
  // always use prop types!
};

export { MenuSingle, MenuDouble };
