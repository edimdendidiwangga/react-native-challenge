import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Footers extends Component {
  render() {
    return (
      <Footer >
        <FooterTab>
          <Button vertical onPress={Actions.pageArticleSwipper}>
            <Icon name="apps" />
            <Text >Swip</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button active vertical onPress={Actions.pageSignin}>
            <Icon active name="person" />
            <Text>Sign In</Text>
          </Button>

          <Button vertical onPress={Actions.pageListAuthor}>
            <Icon name="ios-people" />
            <Text >Author</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
