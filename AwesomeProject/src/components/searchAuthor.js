import React, { Component } from 'react';
import {  Header, Item, Input, Icon, Button, Text } from 'native-base';

class SearchAuthor extends Component {
  constructor(props){
		super(props)
	}

  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}

export default SearchAuthor
