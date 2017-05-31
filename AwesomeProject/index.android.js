import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Container } from 'native-base';
import App from './src/App.js'
import Header from './src/static_components/Header.js'
import Footer from './src/static_components/Footer.js'

export default class AwesomeProject extends Component {
  render() {
    return (

        <Container >
            <App />
          <Footer />
        </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
