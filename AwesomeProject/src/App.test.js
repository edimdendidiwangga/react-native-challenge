import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import store from './store'

it('renders without crashing', ()=> {
  const tree = renderer.create(<Provider store={store}><App /></Provider>)
  expect(tree).toMatchSnapshot()
})
