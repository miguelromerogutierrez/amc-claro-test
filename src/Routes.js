import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './lib/store';
const history = syncHistoryWithStore(hashHistory, store);
import IndexPage from './pages/IndexPage';
import MovieApp from './components/MovieApp';
import MovieDetail from './components/MovieDetail';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="/movie" component={MovieApp} />
        <Route path="/movie-detail/:id" component={MovieDetail} />
      </Router>
    );
  }
}
