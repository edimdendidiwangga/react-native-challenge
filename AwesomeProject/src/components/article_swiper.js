import React, { Component } from 'react';
import axios from 'axios'
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Header, Item, Input, Button } from 'native-base';

export default class ListAuthor extends Component {
  constructor(props){
		super(props)
		this.state = {
			data: [
        {
          title : 'go',
          author : 'edim',
          description : 'bla',
          publishedAt : '1992-09-26',
          urlToImage : 'https://daveti.files.wordpress.com/2012/10/jop.jpg'
        }
      ]
		}
	}

  componentWillMount(){
		let self = this
		axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=8f3ef4123b884857b17e951ae16e4142')
	  .then(function (response) {
	    self.setState({
				data : response.data.articles
			})
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

  handleOnPress(item){
    Actions.pageOnArticle({ card : item })
  }

  render() {
    return (
      <Container style={{paddingTop: 70, paddingLeft: 20, paddingRight: 20}}>
        <DeckSwiper
          dataSource={this.state.data}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.urlToImage}} />
                  <Body>
                    <Text onPress={()=> this.handleOnPress(item)}>{item.title}</Text>
                    <Text note>{item.publishedAt}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                  <Image style={{width: 200, height: 150 }} source={{ uri: item.urlToImage }} />
                </View>
              </CardItem>
              <CardItem>
                <Icon name="home" style={{ color: '#ED4A6A' }} />
                <Text>{item.author}</Text>
              </CardItem>
            </Card>
          }
        />

      </Container>
    );
  }
}
