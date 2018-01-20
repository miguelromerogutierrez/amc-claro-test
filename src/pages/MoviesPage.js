import React, { Component } from 'react';
import MovieApp from 'components/MovieApp';
import { connect } from 'react-redux';

class MoviesPage extends Component {
  render() {
    return (
      <div>
        <MovieApp />
      </div>
    );
  }
}


const mapStateToProps = function mapStateToProps(state) {
  return { movies: state.movies, filter: state.filter };
};
export default connect(mapStateToProps, moviesActionCreators)(MoviesPage);
