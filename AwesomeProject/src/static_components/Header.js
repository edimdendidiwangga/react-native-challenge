import React, { Component } from 'react';
import { Header, Icon, Button, Text, Left, Right, Body, Title } from 'native-base';

export default class Headers extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}
