import { List, Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = List([]);
const Movie = Map({});
const loadingState = Map({
  active: true
});
const tooltipInitialState = {
  show: false,
  content: null
};

export function movies(state = initialState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_MOVIES:
      return state.concat(payload.movies);
    case ActionTypes.CLEAR_MOVIES:
      return state.clear();
    default:
      return state;
  }
}

export function movie(state = Movie, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_MOVIE:
      return Movie.merge(payload.movie);
    case ActionTypes.GET_MOVIE:
      return Movie.toJS();
    case ActionTypes.DELETE_MOVIE:
      return Movie.clear();
    default:
      return state;
  }
}

export function loading(state = loadingState, action = null) {
  const { type } = action;
  switch (type) {
    case ActionTypes.TOGGLE_LOADING:
      return state.update('active', (toggle) => !toggle);
    default:
      return state;
  }
}

export function filter(state = 'All', action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_FILTER:
      return payload;
    default:
      return state;
  }
}

export function tooltip(state = tooltipInitialState, action = null) {
  const { type, payload } = action;
  const newState = state;
  switch (type) {
    case ActionTypes.TOGGLE_TOOLTIP:
      newState.show = !payload.tooltip.show;
      return { ...newState };
    default:
      return state;
  }
}
