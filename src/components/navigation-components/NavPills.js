import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import $ from 'jquery';

class NavPills extends Component {

  componentDidMount() {
    // this prevents buttons from remaining focused
    $("button").mouseup(function() {
      $(this).blur();
    });
  }

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
      tabs,
      color
    } = this.props;

    const tabButtons = (
      <Tabs
        value={this.state.active}
        onChange={this.handleChange}
        centered={true}
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
          axis={"x"}
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

    return (
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

export default (NavPills);
