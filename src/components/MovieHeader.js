import React, { Component, PropTypes } from 'react';

import './MovieHeader.css';

import SearchIcon from '-!svg-react-loader!../images/ic_search_black_24px.svg';

export default class MovieHeader extends Component {

  handleEnter(e) {
    if (e.which === 13) {
      this.props.setFilter(e.target.value);
    }
  }

  render() {
    return (
      <div className="movieheader">
        <h1 className="movieheader_title">Buscar</h1>
        <div className="movieheader_search-request-container">
          <SearchIcon className="movieheader_search-icon" />
          <input type="text" className="movieheader_filter-movie"
            placeholder="Buscar" autoFocus
            onKeyDown={::this.handleEnter}
          />
        </div>
      </div>
    );
  }
}

MovieHeader.contextTypes = {
  dispatch: PropTypes.func
};
