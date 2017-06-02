import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class OnArticle extends Component {
  constructor(props){
		super(props)
	}

  render() {
    return (
      <Container style={{paddingTop: 70, paddingLeft: 20, paddingRight: 20}}>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri : this.props.card.urlToImage}} />
                <Body>
                  <Text>{ this.props.card.title }</Text>
                  <Text note>{ this.props.card.author }</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Image style={{width: 200, height: 150 }} source={{ uri : this.props.card.urlToImage}} />
                <Text>
                  { this.props.card.description }
                </Text>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="person" />
                  <Text>{ this.props.card.author }</Text>
                </Button>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
