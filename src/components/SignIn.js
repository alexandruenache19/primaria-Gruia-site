import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    const { auth } = this.props;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/");
    }
  }

  render() {
    return (
      <div>
          <Button className="nav-bar-menu-item" color="inherit" onClick={this.props.signIn}>
            Logare
            <i style={{marginLeft: 10}} className="fa fa-google social-signin-icon" />
          </Button>

      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { signIn })(Signin);
