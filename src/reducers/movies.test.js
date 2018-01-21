import { movies, movie, loading, filter, tooltip } from './movies';
import * as types from '../constants/ActionTypes';
import { List, Map } from 'immutable';
import moviesMock from '../__mocks__/ListMock.json';
import * as matchers from 'jest-immutable-matchers';
import { type } from 'os';

describe('reducers', () => {
    beforeEach(function () {
        jest.addMatchers(matchers);
    });

    describe('the movies reducer', () => {
        it('should return the initial state', () => {
            expect(movies(undefined, {})).toEqualImmutable(List([]));
        });

        it('should handle ADD_MOVIES', () => {
            expect(movies(List([]), {
                type: types.ADD_MOVIES,
                payload: {
                    movies: moviesMock
                }
            })).toEqualImmutable(List(moviesMock));
        });

        it('should handle CLEAR_MOVIES', () => {
            expect(movies(List(moviesMock), {
                type: types.CLEAR_MOVIES
            })).toEqualImmutable(List([]));
        });
    });

    describe('the movie reducer', () => {
        const movieMock = {a: 1};
        it('should return the initial state', () => {
            expect(movie(undefined, {})).toEqualImmutable(Map({}));
        });

        it('should handle ADD_MOVIE', () => {
            expect(movie(Map({}), {
                type: types.ADD_MOVIE,
                payload: {
                    movie: movieMock
                }
            })).toEqualImmutable(Map(movieMock));
        });

        it('should handle DELETE_MOVIE', () => {
            expect(movie(Map(moviesMock), {
                type: types.DELETE_MOVIE
            })).toEqualImmutable(Map({}));
        });
    });

    describe('the loading reducer', () => {
        const initState = Map({
            active: true
          });
        it('should return the initial state', () => {
            expect(loading(undefined, {})).toEqualImmutable(initState);
        });
        it('should handle TOGGLE_LOADING', () => {
            expect(loading(initState, {
                type: types.TOGGLE_LOADING
            })).toEqualImmutable(Map({
                active: false
            }));
        });
    });

    describe('the filter reducer', () => {
        it('should return the initial state', () => {
            expect(filter(undefined, {})).toEqual('All');
        });
        it('should handle SET_FILTER', () => {
            expect(filter(undefined, {
                type: types.SET_FILTER,
                payload: 'ABC'
            })).toEqual('ABC');
        });
    });
});