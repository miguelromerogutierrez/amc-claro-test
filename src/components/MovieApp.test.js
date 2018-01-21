import 'jsdom-global/register';

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import MovieApp from './MovieApp';
import { Map } from 'immutable';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    movies: {},
    filter: {},
    loading: Map({active: true}),
    toggleLoading: jest.fn(),
    addMovies: jest.fn(),
    clearMovies: jest.fn(),
    setFilter: jest.fn(),
    togleTooltip: jest.fn()
  }

  const enzymeWrapper = mount(<MovieApp {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Movie App', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)

      expect(enzymeWrapper.find('h1').text()).toBe('todos')

      const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      expect(todoInputProps.newTodo).toBe(true)
      expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    })

    it('should call addTodo if length of text is greater than 0', () => {
      const { enzymeWrapper, props } = setup()
      const input = enzymeWrapper.find('TodoTextInput')
      input.props().onSave('')
      expect(props.addTodo.mock.calls.length).toBe(0)
      input.props().onSave('Use Redux')
      expect(props.addTodo.mock.calls.length).toBe(1)
    })
  })
})