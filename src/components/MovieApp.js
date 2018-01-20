import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieHeader from './MovieHeader.js';
import MovieList from './MovieList.js';

import * as moviesActionCreators from '../actions/MoviesAction.js';

import './MovieApp.css';

class MovieApp extends Component {
  render() {
    const { movies, filter, toggleLoading, addMovies, clearMovies, setFilter, togleTooltip, loading } = this.props;
    return (
      <section className="movieapp">
        <MovieHeader setFilter={ setFilter } />
        <MovieList toggleLoading={toggleLoading} loading={loading} movies={movies} filter={filter} addMovies={ addMovies } clearMovies={clearMovies} togleTooltip={togleTooltip} />

      </section>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return { movies: state.movies, filter: state.filter, loading: state.loading };
};
export default connect(mapStateToProps, moviesActionCreators)(MovieApp);
