import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';

const types = ['All', 'Active', 'Completed'];

export default class MovieFooter extends Component {

  static propTypes = {
    movies: PropTypes.instanceOf(List).isRequired,
    filter: PropTypes.string.isRequired,
  };

  render() {
    const { movies, filter, setFilter } = this.props;
    const count = movies.count((movie) => !movie.get('completed'));

    return (
      <footer className="footer">
        <span className="movie-count"><strong>{count}</strong> item left</span>
        <ul className="filters">
          {
            types.map((type, index) =>
              <li key={index}><a className={filter === type && 'selected'} onClick={() => setFilter(type)}>{type}</a></li>
            )
          }
        </ul>
        <button className="clear-completed" onClick={() => this.props.clearMovie()}>Clear completed</button>
      </footer>
    );
  }
}
