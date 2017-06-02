import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native'
import { Container, Content, Spinner, List, ListItem, Thumbnail, Text, Body, Left, Right } from 'native-base';
import { fetchArticles } from '../actions/Action'
import { connect } from 'react-redux'
import SearchAuthor from './searchAuthor'

class ListAuthor extends Component {
  constructor(props){
		super(props)
		this.state = {
      query: ''
		}
	}

  searchArticle(value){
  	this.setState({ query: value })
  }

  componentDidMount() {
		this.props.fetchArticles()
	}

  render() {
    let filteredData = this.props.articles.data.filter((x) => {
			let regex = new RegExp(this.state.query, 'gi')
			return regex.test(x.author)
		})
    return (
      <Container style={{paddingTop: 55}}>
        <SearchAuthor handleSearchChange={this.searchArticle.bind(this)} />
        <Content>
        {filteredData.map((item, index) =>
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

const mapStateToProps = state => ({
	articles: state // tadinya array , sekarang menjadi object {data, loading}
})
const mapDispatchToProps = dispatch => ({
	fetchArticles : () => dispatch(fetchArticles()),

})
// export default PasswordForm
export default connect(mapStateToProps, mapDispatchToProps)(ListAuthor)
