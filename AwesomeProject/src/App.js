import React, { Component } from 'react';
import { Container } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import ArticleSwipper from './components/article_swiper'
import ListAuthor from './components/list_author'
import OnArticle from './components/OnArticle'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
          <Scene key="root">
            <Scene key="pageArticleSwipper" component={ArticleSwipper} title="Article Swipper" initial={true} />
            <Scene key="pageListAuthor" component={ListAuthor} title="List Author" />
            <Scene key="pageOnArticle" component={OnArticle} title="One Article" />
          </Scene>
        </Router>
      </Container>
    );
  }
}

const styles = {
  navBar: {
    backgroundColor:'#0D47A1',
  },
  navBarTitle:{
    color:'#FFFFFF'
  },
  barButtonTextStyle:{
    color:'#FFFFFF'
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
  }
}
