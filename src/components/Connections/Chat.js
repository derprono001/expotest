import React, { Component } from 'react';
import { Container, Content, Header, Item, Icon, Input, Text } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import MainFooterBar from '../common/MainFooterBar';
import { navigateToConnections } from '../../actions/NavigationActions';

class Chat extends Component {

  componentDidMount() {
    this.props.navigateToConnections();
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
            <Text>connections</Text>
          </Item>
        </Content>
        <MainFooterBar page={this.props.sceneKey} />
      </Container>
    );
  }
}

export default connect(undefined, { navigateToConnections })(Chat);
