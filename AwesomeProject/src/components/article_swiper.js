import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Spinner, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Header, Item, Input, Button } from 'native-base';
import { fetchArticles } from '../actions/Action'

class ArticleSwipper extends Component {
  constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}

  componentDidMount() {
		this.props.fetchArticles()
	}

  handleOnPress(item){
    Actions.pageOnArticle({ card : item })
  }

  render() {
    if(this.props.articles.data.length == 0){
      return (<Content style={{paddingTop: 70}}><Spinner color='green' /></Content>);
    }else{
    return (
      <Container style={{paddingTop: 70, paddingLeft: 20, paddingRight: 20}}>
        <DeckSwiper
          dataSource={this.props.articles.data}
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
}

const mapStateToProps = state => ({
	articles: state // tadinya array , sekarang menjadi object {data, loading}
})
const mapDispatchToProps = dispatch => ({
	fetchArticles : () => dispatch(fetchArticles()),

})
// export default PasswordForm
export default connect(mapStateToProps, mapDispatchToProps)(ArticleSwipper)
