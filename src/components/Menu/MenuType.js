import React from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";

function MenuSingle({ menuLoc, menuName }) {
  const isDividerShown = menuLoc != 0;
  const classLoc = {
    0: "menu-topic",
    1: "menu-desc",
    2: "menu-item",
    3: "menu-signout",
  };

  return (
    <div>
      <Grid.Column>
        <p className={classLoc[menuLoc]}>{menuName}</p>
      </Grid.Column>
      {isDividerShown ? <hr class="menu-hr"></hr> : null}
    </div>
  );
}

function MenuDouble({ menuDoubleInfo }) {
  function MenuElement({ imgName, menuName }) {
    return (
      <Grid.Column className="menu-double">
        <img
          className="menu-double-img"
          src={process.env.PUBLIC_URL + `assets/img/Menu/${imgName}.png`}
          alt=""
        />
        <p className="menu-double-item menu-item">{menuName}</p>
      </Grid.Column>
    );
  }
  return (
    <div className="menu-group">
      <Grid.Row style={{ display: "inline-flex" }} columns={2}>
        <MenuElement
          imgName={menuDoubleInfo[0].imgName}
          menuName={menuDoubleInfo[0].menuName}
        />
        <div style={{ width: "1em" }}></div>
        <MenuElement
          imgName={menuDoubleInfo[1].imgName}
          menuName={menuDoubleInfo[1].menuName}
        />
      </Grid.Row>
      <hr className="menu-hr"></hr>
    </div>
  );
}

MenuSingle.propTypes = {
  menuLoc: PropTypes.number.isRequired,
  menuName: PropTypes.string.isRequired,
};

MenuDouble.propTypes = {
  menuDoubleInfo: PropTypes.arrayOf(
    PropTypes.shape({
      imgName: PropTypes.string.isRequired,
      menuName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { MenuSingle, MenuDouble };
