import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { movies, filter, movie, loading } from './movies.js';

const rootReducer = combineReducers({
  movies,
  filter,
  movie,
  loading,
  routing: routerReducer
});

export default rootReducer;
