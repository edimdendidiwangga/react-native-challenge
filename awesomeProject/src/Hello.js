import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon,  } from 'native-base';

class HelloWorldApp extends Component {
  render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    // Your main content goes here
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>

                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default HelloWorldApp
