import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveDocuments } from '../../actions/index'
import _ from 'lodash'

// core components
import ListItemComponent from './ListItemComponent'
import ProiecteItemList from './ProiecteItemList'
import NavPills from './NavPills'
import $ from 'jquery'
import { sectionTitles } from '../../config/constants'

class SectionPills extends Component {
  componentWillMount () {
    // get the documents for the entire category
    this.props.retrieveDocuments(this.props.category)
  }

  componentDidMount () {
    // this prevents buttons from remaining focused
    $('button').mouseup(function () {
      $(this).blur()
    })
  }

  createTabs () {
    console.log(this.props.documents)
    const sections = sectionTitles[this.props.category]
    let currentTabs = []
    const { documents } = this.props

    sections.map(section => {
      let subCategory = section.tabButtonTitle
      console.log(documents[subCategory])

      let docVisual = documents[subCategory] ? (
        _.map(documents[subCategory]['documents'], (object, key) => {
          console.log(object)
          return (
            <ProiecteItemList key={key} url={object.url} pdfName={object.name} timestamp={object.timestamp} />
          //  <ListItemComponent key={key} url={object.url} pdfName={object.name} timestamp={object.timestamp} />
          )
        })
      ) : (
        <span>
          <p>
            Nu este atasat niciun document
          </p>
        </span>
      )

      currentTabs.push(
        {
          tabButton: section.tabButtonTitle,
          tabIcon: section.tabIcon,
          tabContent: (
            docVisual
          )
        }
      )
    })
    return currentTabs
  };

  render () {
    return (
      <div id='navigation-pills'>
        <NavPills
          color='primary'
          tabs={this.createTabs()}
        />
      </div>
    )
  }
};

function mapStateToProps ({ documents }) {
  return { documents }
}

export default connect(mapStateToProps, { retrieveDocuments })(SectionPills)
