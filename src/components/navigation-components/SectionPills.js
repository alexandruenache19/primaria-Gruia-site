import React, { Component } from "react";
import {
  authRef,
  provider,
  databaseRef,
  storageRef
} from "../../config/firebase";
import { connect } from "react-redux";
import { retrieveDocuments } from '../../actions/index';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import NavPills from "./NavPills";
import $ from 'jquery';

import { sectionTitles } from '../../config/constants';

class SectionPills extends Component {

  componentWillMount() {
    // get the documents for the entire category
    this.props.retrieveDocuments('Guvernanta');
  }

  componentDidMount() {
    // this prevents buttons from remaining focused
    $("button").mouseup(function() {
      $(this).blur();
    });
  }

  snapshotToArray(snapshot) {
    return Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }))
  }

  createTabs() {
    console.log(this.props.documents);
    const sections = sectionTitles[this.props.category];
    let currentTabs = [];
    const { documents, category } = this.props;

    sections.map(section => {

      let subCategory = section.tabButtonTitle;
      console.log(documents[subCategory]);

      let docVisual = documents[subCategory] ? (
        <span>
          {this.snapshotToArray(documents[subCategory]['documents'])}
        </span>
      ) : (
        <span>
          <p>
            Nu este atasat niciun document
          </p>
        </span>
      );
      currentTabs.push(
        {
          tabButton: section.tabButtonTitle,
          tabIcon: section.tabIcon,
          tabContent: (
            docVisual
          )
        }
      );
    });

    return currentTabs;
  };

  render() {
    return (
      <div id="navigation-pills">
        <NavPills
          color="primary"
          tabs={this.createTabs()}
        />
      </div>
    );
  }
};

function mapStateToProps({ documents }) {
  return { documents };
}

export default connect(mapStateToProps, { retrieveDocuments })(SectionPills);
