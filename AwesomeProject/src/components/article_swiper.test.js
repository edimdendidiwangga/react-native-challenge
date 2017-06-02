import React from 'react';
import ArticleSwipper from './article_swiper';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import store from '../store'

const articles = [{
  urlToImage : 'www',
  author : 'edim',
  title : 'react native',
  publishedAt : '2017-09-26',
  description: 'bla bla'
},
{
  urlToImage : 'www',
  author : 'edim',
  title : 'react native',
  publishedAt : '2017-09-26',
  description: 'bla bla'
},
{
  urlToImage : 'www',
  author : 'edim',
  title : 'react native',
  publishedAt : '2017-09-26',
  description: 'bla bla'
}]


beforeEach(function() {
  store.dispatch({
    type: 'FETCH_ARTICLES',
    payload: articles
  })
})

it('renders without crashing', ()=> {
  const tree = renderer.create(<Provider store={store}><ArticleSwipper/></Provider>)
  expect(tree).toMatchSnapshot()
})
