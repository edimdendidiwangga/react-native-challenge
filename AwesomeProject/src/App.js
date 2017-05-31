import React, { Component } from 'react';
import axios from 'axios'
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Header, Item, Input, Button } from 'native-base';
export default class App extends Component {
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

  render() {
    return (
      <Container style={{padding: 20}}>
        <DeckSwiper
          dataSource={this.state.data}
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.urlToImage}} />
                  <Body>
                    <Text>{item.title}</Text>
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
