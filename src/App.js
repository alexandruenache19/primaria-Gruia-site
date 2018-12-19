import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import HomeComponent from './components/HomeComponent';
import GuvernantaComponent from './components/GuvernantaComponent';

import $ from 'jquery';

class App extends Component {

  componentDidMount() {
    // this prevents buttons from remaining focused
    $("button").mouseup(function() {
      $(this).blur();
    });
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/guvernanta" component={GuvernantaComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
