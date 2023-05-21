import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./Menu.scss";

const Menu = (props) => (
  <Grid divided="vertically">
    <Grid.Column>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
    </Grid.Column>
    <Grid.Row columns={2}>
      <Grid.Column>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Grid.Column>
      <Grid.Column>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const MenuPropTypes = {
  // always use prop types!
};

Menu.propTypes = MenuPropTypes;

export default Menu;
