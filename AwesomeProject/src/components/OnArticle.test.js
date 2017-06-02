import React from 'react';
import OnArticle from './OnArticle';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import store from '../store'

const listArticle = {
 data : [
  {
   urlToImage : 'www',
   author : 'edim',
   title : 'react native',
   publishedAt : '2017-09-26'
  }
 ]
}

it('renders without crashing', ()=> {
  const tree = renderer.create(<OnArticle card={listArticle}/>)
  expect(tree).toMatchSnapshot()
})
