import React, { Component } from 'react';
import axios from 'axios'
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Left, Right } from 'native-base';

export default class ListAuthor extends Component {
  constructor(props){
		super(props)
		this.state = {
			data: []
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
      <Container style={{paddingTop: 55}}>
        <Content>
        {this.state.data.map((item, index) =>
           (
            <ListItem avatar key={index}>
              <Left>
                  <Thumbnail source={{uri: item.urlToImage}} />
              </Left>
              <Body>
                  <Text>{item.author}</Text>
                  <Text note>Hacker News</Text>
              </Body>
              <Right>
                  <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}
