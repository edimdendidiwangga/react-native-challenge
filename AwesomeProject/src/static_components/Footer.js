import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class Footers extends Component {
  render() {
    return (
      <Footer >
        <FooterTab>
          <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
          </Button>
          <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
          </Button>
          <Button active vertical>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
          </Button>
          <Button vertical>
              <Icon name="person" />
              <Text>Author</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
