import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../actions";
import PropTypes from "prop-types";
import SignIn from "./SignIn"

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom';

import $ from 'jquery';

class NavBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  state = {
    left: false
  };

  componentDidMount() {
    // this prevents buttons from remaining focused
    $("button").mouseup(function() {
      $(this).blur();
    });
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <div style={{
          flexGrow: 1,
          backgroundColor: '#fff',
          color: '#BFBFBF',
          position: 'relative',
          display: 'flex',
          width: '100%',
        }}>
        <AppBar
          position="static"
          style={{
            backgroundColor: '#fff',
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
          }}>
          <Toolbar>
            <IconButton
              id="drawer-toggler"
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer('left', true)}
              style={{marginLeft: '-5px'}}
              className="mobile-menu-icon"
            >
              <MenuIcon />
            </IconButton>
            <Link to='/' style={{flex: 1, display: 'flex', alignItems: 'center'}} className="dark-text-button">
              {/*<img src="../../img/magenta-logo.png" style={{maxWidth: 90}} />*/}
              <Button className="nav-bar-menu-item" color="inherit">
                Primaria Gruia
              </Button>
            </Link>
            <Link to='/guvernanta' className="dark-text-button">
              <Button className="nav-bar-menu-item" color="inherit">
                Guvernanta
              </Button>
            </Link>
            <Link to='/' className="dark-text-button">
              <Button className="nav-bar-menu-item" color="inherit">
                Localnici
              </Button>
            </Link>
            <Link to='/' className="dark-text-button">
              <Button className="nav-bar-menu-item" color="inherit">
                Obiective turistice
              </Button>
            </Link>
            {this.props ?
              <Button className="nav-bar-menu-item" color="inherit" onClick={this.props.signOut}>
                Delogare
                <i style={{marginLeft: 10}} className="material-icons">exit_to_app</i>
              </Button>
              :
              <SignIn/>
            }
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
          style={{width: 240}}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            style={{width: 240, flexDirection: 'column'}}
          >
            <Link to='/' className="dark-text-button">
              <Button className="nav-bar-menu-item" color="inherit">
                Primarie
              </Button>
            </Link>
            <Link to='/' className="dark-text-button">
              <Button className="nav-bar-menu-item" color="inherit">
                Localnici
              </Button>
            </Link>
            <Link to='/' className="dark-text-button">
              <Button className="nav-bar-menu-item" color="inherit">
                Obiective turistice
              </Button>
            </Link>
            {this.props ?
              <Button className="nav-bar-menu-item" color="inherit" onClick={this.props.signOut}>
                Delogare
                <i style={{marginLeft: 10}} className="material-icons">exit_to_app</i>
              </Button>
              :
              <SignIn/>
            }
        </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(null, { signOut })(NavBar);
