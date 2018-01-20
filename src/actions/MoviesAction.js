import { ADD_MOVIE, ADD_MOVIES, CLEAR_MOVIES, TOGGLE_CHECKED, DELETE_MOVIE, SET_FILTER, CLEAR_MOVIE, TOGGLE_TOOLTIP, TOGGLE_LOADING } from '../constants/ActionTypes';

export function togleTooltip(tooltip) {
  return {
    type: TOGGLE_TOOLTIP,
    payload: {
      tooltip
    }
  };
}

export function toggleLoading() {
  return {
    type: TOGGLE_LOADING
  };
}

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    payload: {
      movie
    }
  };
}

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    payload: {
      movies,
      completed: false
    }
  };
}

export function toggleChecked(index) {
  return {
    type: TOGGLE_CHECKED,
    payload: {
      index
    }
  };
}

export function clearMovies() {
  return {
    type: CLEAR_MOVIES
  };
}

export function deleteMovie(index) {
  return {
    type: DELETE_MOVIE,
    payload: {
      index
    }
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  };
}

export function clearMovie() {
  return {
    type: CLEAR_MOVIE
  };
}
