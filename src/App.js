import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import HomeComponent from './components/HomeComponent';
import GuvernantaComponent from './components/main-sections/GuvernantaComponent';
import ConsiliulLocalComponent from './components/main-sections/ConsiliulLocalComponent';
import ComunaComponent from './components/main-sections/ComunaComponent';
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
          <Route exact path="/consiliul" component={ConsiliulLocalComponent} />
          <Route exact path="/comuna" component={ComunaComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
