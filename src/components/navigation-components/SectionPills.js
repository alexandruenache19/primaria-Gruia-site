import React, { Component } from "react";
import {
  authRef,
  provider,
  databaseRef,
  storageRef
} from "../../config/firebase";
import { connect } from "react-redux";
import { retrieveDocuments } from '../../actions/index';

import _ from 'lodash';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import ListItemComponent from "./ListItemComponent";
import List from '@material-ui/core/List';
import NavPills from "./NavPills";
import Profile from "./Profile";
import GridList from '@material-ui/core/GridList';
import $ from 'jquery';

import { sectionTitles, membri } from '../../config/constants';

class SectionPills extends Component {

  componentWillMount() {
    // get the documents for the entire category
    this.props.retrieveDocuments(this.props.category);
  }

  componentDidMount() {
    // this prevents buttons from remaining focused
    $("button").mouseup(function() {
      $(this).blur();
    });
  }
  createMembers(){
    const echipa = membri[this.props.category];
    echipa.map(membru => {
      return <Profile imagineMembru={membru.linkAvatar} numeMembru={membru.nume} descriereMembru={membru.descriere} />
    });
  };

  createTabs() {
    console.log(this.props.documents);
    const sections = sectionTitles[this.props.category];
    let currentTabs = [];
    const { documents, category } = this.props;

    sections.map(section => {

      let subCategory = section.tabButtonTitle;
      console.log(documents[subCategory]);

      let docVisual = documents[subCategory] ? (
          _.map(documents[subCategory]['documents'], (object, key) => {
            console.log(object);
            return (
              <ListItemComponent key={key} url={object.url} pdfName={object.name} timestamp={object.timestamp}/>
            )
          })
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
      {
        this.props.category=='guvernanta' ? (
        <GridList>
          {this.createMembers()}
        </GridList>
      ) : (
        null
      )
      }
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
