import React, { Component } from "react";
import { connect } from "react-redux";
import { storageRef } from "../../config/firebase";
import NavBar from '../navigation-components/NavBar';
import Button from '@material-ui/core/Button';
import FileUploader from 'react-firebase-file-uploader';
import { sectionTitles } from '../../config/constants';
import { submitDocument } from '../../actions/index';
import _ from 'lodash';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

class Form extends Component {

  state = {
    username: '',
    pdfName: '',
    isUploading: false,
    progress: 0,
    url: '',
    section: '',
    subSection: ''
  };

  handleUploadStart = () => this.setState({
    isUploading: true,
    progress: 0
  });

  handleProgress = (progress) => this.setState({
    progress
  });

  handleUploadError = (error) => {
    this.setState({
      isUploading: false
    });
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    this.setState({
      pdfName: filename,
      progress: 100,
      isUploading: false
    });

    storageRef.child(filename).getDownloadURL().then(url => {
        console.log(url);
        this.setState({
          url: url
        })
      }
    );
  };

  handleFormSubmit = () => {
    const { pdfName, url, section, subSection } = this.state;
    console.log(section + ' ' + subSection);
    let currentTime = new Date().toLocaleString();
    this.props.submitDocument(section, subSection, url, pdfName, currentTime);
  };

  handleSectionChange = event => {
    this.setState({ section: event.target.value });
  };

  handleSubSectionChange = event => {
    this.setState({ subSection: event.target.value });
  };

  renderSubSections(section) {
    const subsection = _.map(sectionTitles[section], (subCategory, key) => {
      return (
        <FormControlLabel
          key={key}
          value={subCategory['tabButtonTitle']}
          control={<Radio />}
          label={subCategory['tabButtonTitle']}
        />
      )
    })
    return subsection;
  }

  renderSections() {
    const sections = _.map(sectionTitles, (category, key) => {
      return (
        <FormControlLabel key={key} value={key} control={<Radio />} label={key} />
      )
    })
    return sections;
  }

  render() {
    const { auth } = this.props;
    const { renderSections, renderSubSections, handleSubSectionChange, handleFormSubmit } = this;
    return (
      <div>
        <NavBar />
        <div style={{padding: '3em'}}>
          <form style={{display: 'flex', flexDirection: 'column'}}>
            <FormControl component="fieldset" style={{marginTop: '1em'}}>
              <FormLabel component="legend">Selecteaza sectiunea</FormLabel>
              <RadioGroup
                aria-label="section"
                name="section"
                value={this.state.section}
                onChange={this.handleSectionChange}
              >
                {renderSections()}
              </RadioGroup>
              <FormLabel style={{marginTop: '1em'}} component="legend">Selecteaza sub-sectiunea</FormLabel>
              <RadioGroup
                aria-label="subsection"
                name="subsection"
                value={this.state.subSection}
                onChange={this.handleSubSectionChange}
              >
                {renderSubSections(this.state.section)}
              </RadioGroup>
              {
                this.state.isUploading &&
                <p>Progress: {this.state.progress}</p>
              }
              {
                this.state.url &&
                <a href={this.state.url} />
              }
              <FileUploader
                accept="pdf/*"
                name="document"
                storageRef={storageRef}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
              <Button onClick={handleFormSubmit} variant="contained" color="secondary" type="submit" style={{marginTop: '1em'}}>
                Submit
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { submitDocument })(Form);
