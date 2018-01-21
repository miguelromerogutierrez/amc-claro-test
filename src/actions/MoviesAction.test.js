import {addMovie, addMovies, deleteMovie, clearMovie, clearMovies, toggleLoading, setFilter} from './MoviesAction';
import {ADD_MOVIE, ADD_MOVIES, CLEAR_MOVIES, TOGGLE_CHECKED, DELETE_MOVIE, SET_FILTER, CLEAR_MOVIE, TOGGLE_TOOLTIP, TOGGLE_LOADING} from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a movie', () => {
    const movie = 'Finish docs';
    const expectedAction = {
      type: ADD_MOVIE,
      payload: {
        movie
      }
    };
    expect(addMovie(movie)).toEqual(expectedAction);
  });

  it('should create an action to toggle loading', () => {
    const expectedAction = {
        type: TOGGLE_LOADING
    };
    expect(toggleLoading()).toEqual(expectedAction);
  });

  it('should create an action to add movies', () => {
    const expectedAction = {
        type: ADD_MOVIES,
        payload: {
            movies: 1
        }
    };
    expect(addMovies(1)).toEqual(expectedAction);
  });

  it('should create an action to clear movie', () => {
    const expectedAction = {
        type: CLEAR_MOVIES
    };
    expect(clearMovies()).toEqual(expectedAction);
  });

  it('should create an action to delete movie', () => {
    const expectedAction = {
        type: DELETE_MOVIE,
        payload: {
            index: 1
        }
    };
    expect(deleteMovie(1)).toEqual(expectedAction);
  });

  it('should create an action to set filter', () => {

    const expectedAction = {
        type: SET_FILTER,
        payload: 'filter'
    };
    expect(setFilter('filter')).toEqual(expectedAction);
  });

  it('should create an action to clear movie', () => {
    const expectedAction = {
        type: CLEAR_MOVIE
    };
    expect(clearMovie()).toEqual(expectedAction);
  });
});
