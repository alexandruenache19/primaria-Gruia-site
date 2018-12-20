import React, { Component } from "react";
import {
  authRef,
  provider,
  databaseRef,
  storageRef
} from "../../config/firebase";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import NavPills from "./NavPills";
import $ from 'jquery';

import { sectionTitles } from '../../config/constants';

class SectionPills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      currentTabs: [],
      categoriesRef: databaseRef.child('/category').child(props.category),
    };
  }
  componentDidMount() {
    // this prevents buttons from remaining focused
    $("button").mouseup(function() {
      $(this).blur();
    });
  }

  createTab() {

    const sections = sectionTitles[this.state.category];

    console.log(sectionTitles[this.state.category]);

    sections.map(section => {
        this.state.categoriesRef.child(section.tabButtonTitle).child('documents').on('value', (snapshot) => {
        const documents = snapshot.val();
        if(documents) {
          console.log("Retrived:", documents["pdf1"]);
          this.state.currentTabs.push(
            {
              tabButton: section.tabButtonTitle,
              tabIcon: section.tabIcon,
              tabContent: (
                <span>
                  {documents["pdf1"]}
                </span>
              )
            }
          );
        } else {
          this.state.currentTabs.push(
            {
              tabButton: section.tabButtonTitle,
              tabIcon: section.tabIcon,
              tabContent: (
                <span>
                  <p>
                    Nu este atasat niciun document
                  </p>
                </span>
              )
            }
          );
        };
      });
    });
  };

  render() {
    return (
      <div id="navigation-pills">
        {this.createTab()}
        <NavPills
          color="primary"
          tabs={this.state.currentTabs}
        />
      </div>
    );
  }
}

export default (SectionPills);
