import React, { Component } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import NavPills from "./NavPills";
import $ from 'jquery';

import { guvernantaContent } from '../../config/constants';

class SectionPills extends Component {

  componentDidMount() {
    // this prevents buttons from remaining focused
    $("button").mouseup(function() {
      $(this).blur();
    });
  }

  render() {
    return (
      <div id="navigation-pills">
        <NavPills
          color="primary"
          tabs={guvernantaContent}
        />
      </div>
    );
  }
}

export default (SectionPills);
