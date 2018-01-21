import 'jsdom-global/register';

import React from 'react';
import Enzyme, {
  mount
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MovieList from './MovieList';
import fetchMock from 'fetch-mock';
import {
  Map, List
} from 'immutable';
import mockList from '../__mocks__/ListMock.json';

Enzyme.configure({
  adapter: new Adapter()
});

const urlMock = 'https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.7&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=kaopfvtgesjnpu027bd0552m55&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869';

function setup() {
  const props = {
    movies: List(mockList),
    filter: 'All',
    loading: Map({
      active: true
    }),
    toggleLoading: jest.fn(),
    addMovies: jest.fn(),
    clearMovies: jest.fn(),
    setFilter: jest.fn(),
    togleTooltip: jest.fn()
  };

  const enzymeWrapper = mount(< MovieList { ...props } />);
  return {
    props,
    enzymeWrapper
  };
}

  describe('components', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });
    describe('Movie List', () => {
      let wrapper;
      beforeEach(() => {
        fetchMock
          .mock(urlMock, {
            response: {
              groups: mockList
            }
          });
          wrapper = setup().enzymeWrapper;
      });
      afterEach(() => {
        wrapper.unmount();
      });
      it('should render self and subcomponents', () => {
        expect(wrapper.find('li')).toHaveLength(4);
      });
      it('should set the image url correct', () => {
        expect(wrapper.find('img').at(0).prop('src')).toEqual('https://clarovideocdn7.clarovideo.net/PELICULAS/REALSTEEL/EXPORTACION_WEB/SS/REALSTEELWHORIZONTAL.jpg?size=290x163');
      });
      describe('the 4th tooltip', () => {
        it('should has the class name reverse', () => {
          expect(wrapper.find('.tooltip').at(3).prop('className')).toEqual('tooltip reverse');
        });
      });
    });
  });
