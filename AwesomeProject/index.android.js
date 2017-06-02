import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Container } from 'native-base';
import App from './src/App.js'
import Header from './src/static_components/Header.js'
import Footer from './src/static_components/Footer.js'
import { Provider } from 'react-redux'
import store from './src/store'

export default class AwesomeProject extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container >
            <App />
          <Footer />
        </Container>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 40,
//     backgroundColor: '#F5FCFF',
//   }
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
