import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Content, Form, Item, Input,Label, Button, Icon, Text} from 'native-base';

class Signin extends Component {
  constructor(props){
		super(props)
	}

  render() {
    return (
      <Container style={{paddingTop: 70, paddingLeft: 20, paddingRight: 20}}>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <View style={{paddingTop: 20}}>
            <Button textStyle={{color: '#87838B'}} >
              <Icon name="person" /><Text>Sign In</Text>
            </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Signin
