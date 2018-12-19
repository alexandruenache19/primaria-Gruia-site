import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from './NavBar';
import SectionPills from './NavPills/SectionPills';
import Chips from './Chips/Chips'

class GuvernantaComponent extends Component {

  render() {
    const { classes, ...rest } = this.props;
    return (
        <div >
          <NavBar />
          <SectionPills/>
          <Chips/>
        </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(null, { })(GuvernantaComponent);
