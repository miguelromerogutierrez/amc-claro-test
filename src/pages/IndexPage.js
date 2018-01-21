import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Link to="/movie">Go to MovieList</Link>
      </div>
    );
  }
}
