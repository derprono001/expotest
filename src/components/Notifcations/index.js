import React, { Component } from 'react';
import { Container, Content, Header, Item, Icon, Input, Text } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Keyboard } from 'react-native';

import MainFooterBar from '../common/MainFooterBar';
import { navigateToNotifications } from '../../actions/NavigationActions';

class Notifications extends Component {

  componentDidMount() {
    this.props.navigateToNotifications();
    Keyboard.dismiss();
  }

  componentWillUnmount() {
    Actions.pop();
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon ios="ios-search" android="md-search" />
            <Input placeholder="Search..." />
          </Item>
        </Header>
        <Content>
          <Item>
            <Text>Notifications Page: Coming up later!</Text>
          </Item>
        </Content>
        <MainFooterBar page={this.props.sceneKey} />
      </Container>
    );
  }
}

export default connect(undefined, { navigateToNotifications })(Notifications);
