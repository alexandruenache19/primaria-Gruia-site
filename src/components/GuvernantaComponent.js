import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from './navigation-components/NavBar';
import SectionPills from './navigation-components/SectionPills';
import Grid from '@material-ui/core/Grid';

class GuvernantaComponent extends Component {

  render() {
    return (
      <div >
        <NavBar />
        <div style={{padding: '3rem'}}>
          <SectionPills />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(null, { })(GuvernantaComponent);
