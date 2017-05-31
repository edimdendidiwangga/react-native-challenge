import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Left, Right } from 'native-base';
import { fetchArticles } from '../actions/Action'
import { connect } from 'react-redux'

class ListAuthor extends Component {
  constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}

  componentDidMount() {
		this.props.fetchArticles()
	}

  render() {
    return (
      <Container style={{paddingTop: 55}}>
        <Content>
        {this.props.articles.data.map((item, index) =>
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
