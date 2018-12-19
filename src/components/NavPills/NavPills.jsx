import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";

//import NavPillsStyle from "./assets/jss/material-kit-react/components/NavPillsStyle.jsx";

class NavPills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };
  }
  handleChange = (event, active) => {
    this.setState({ active });
  };
  handleChangeIndex = index => {
    this.setState({ active: index });
  };
  render() {
    const {
      classes,
      tabs,
      direction,
      color,
      horizontal,
      alignCenter
    } = this.props;

    const tabButtons = (
      <Tabs
        value={this.state.active}
        onChange={this.handleChange}
        centered={alignCenter}
      >
        {tabs.map((prop, key) => {
          var icon = {};
          if (prop.tabIcon !== undefined) {
           icon["icon"] = <prop.tabIcon  />;
          }

          return (
            <Tab
              label={prop.tabButton}
              key={key}
              {...icon}
            />
          );
        })}
      </Tabs>
    );
    const tabContent = (
      <div>
        <SwipeableViews
          axis={direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.active}
          onChangeIndex={this.handleChangeIndex}
        >
          {tabs.map((prop, key) => {
            return (
              <div  key={key}>
                {prop.tabContent}
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    );
    return horizontal !== undefined ? (
      <GridContainer>
        <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
        <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
      </GridContainer>
    ) : (
      <div>
        {tabButtons}
        {tabContent}
      </div>
    );
  }
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  classes: PropTypes.object.isRequired,
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};

export default (NavPills);
