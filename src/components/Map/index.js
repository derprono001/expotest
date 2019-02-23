import React, { Component } from 'react';
import { Container, Content, Header, Item, Icon, Input, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';

import MainFooterBar from '../common/MainFooterBar';
import { navigateToMap } from '../../actions/NavigationActions';

class Map extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.navigateToMap();
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
            <Text>map</Text>
          </Item>
        </Content>
        <MainFooterBar page={this.props.sceneKey} />
      </Container>
    );
  }
}

export default connect(undefined, { navigateToMap })(Map);
