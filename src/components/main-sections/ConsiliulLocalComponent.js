import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from '../navigation-components/NavBar';
import SectionPills from '../navigation-components/SectionPills';

class ConsiliulLocalComponent extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <div style={{padding: '3rem'}}>
          <SectionPills category = "Consiliul" />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(null, { })(ConsiliulLocalComponent);
