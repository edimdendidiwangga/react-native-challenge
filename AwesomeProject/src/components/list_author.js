import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

export default class ListAuthor extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
                <Thumbnail source={require('./img/one.png')} />
            </Left>
            <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
                <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
