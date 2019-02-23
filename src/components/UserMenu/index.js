import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Item,
  Icon,
  Input,
  List,
  ListItem,
  Left,
  Right,
  Body,
  Thumbnail,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Keyboard } from 'react-native';

import { logoutUser } from '../../actions/AuthActions';
import MainFooterBar from '../common/MainFooterBar';
import { navigateToMenu } from '../../actions/NavigationActions';

class UserMenu extends Component {

  componentDidMount() {
    this.props.navigateToMenu();
    Keyboard.dismiss();
  }

  componentWillUnmount() {
    Actions.pop();
  }

  render() {
    const url = 'https://googlechrome.github.io/samples/picture-element/images/butterfly.webp'; //change later to user avatar

    const { user } = this.props;
    console.log(user);

    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon ios="ios-search" android="md-search" />
            <Input placeholder="Search..." />
          </Item>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail source={{ uri: url }} />
              </Left>
              <Body>
                <Text>
                  {user.user.displayName ? user.user.displayName : user.user.email}
                </Text>
              </Body>
            </ListItem>

            <ListItem button onPress={() => Actions.viewprofile({ uid: user.user.uid })}>
              <Left>
                <Text>My Profiles</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem button>
              <Left>
                <Text>Change Password</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem button onPress={() => Actions.connections()}>
              <Left>
                <Text>My connections</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem button>
              <Left>
                <Text>My Places</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem button>
              <Left>
                <Text>My Feedbacks</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem button>
              <Left>
                <Text>App Settings</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem button>
              <Left>
                <Text>Support</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem button onPress={() => this.props.logoutUser()}>
              <Left>
                <Text>Log Out</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

          </List>
        </Content>
        <MainFooterBar page={this.props.sceneKey} />
      </Container >
    );
  }
}

const mapStateToProps = (state) =>
  ({ user: state.auth.user, });

export default connect(mapStateToProps, { navigateToMenu, logoutUser })(UserMenu);
