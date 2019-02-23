import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Text,
  Left,
  Body,
  Spinner,
  Right,
  Button,
  Icon,
  List,
  ListItem,
  Card,
  CardItem
} from 'native-base';
import { Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { accordionBorderColor } from '../../../native-base-theme/variables/commonColor';
import MainFooterBar from '../common/MainFooterBar';
import { navigateToMenu } from '../../actions/NavigationActions';
import { getUserProfile } from '../../actions/UserProfileActions';

const viewport = Dimensions.get('window').width;

const styles = {
  listHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: 24,
    paddingLeft: 5,
    marginBottom: 5
  },
  link: {
    fontSize: 0.0275 * viewport,
    fontStyle: 'italic',
    color: 'rgba(0,0,0,0.7)'
  },
  textHeader: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.8)'
  }
};

class ViewProfile extends Component {
  componentDidMount() {
    this.props.navigateToMenu();
    this.props.getUserProfile(this.props.uid);
  }

  render() {
    const url =
      'https://googlechrome.github.io/samples/picture-element/images/butterfly.webp'; //change later to user avatar

    const { uid, userProfile, loading, user } = this.props;
    console.log(userProfile);
    console.log(user);
    const isMyProfile = user.user.uid === uid;
    return (
      <Container>
        <Header>
          <Left>
            <Button iconLeft onPress={() => Actions.pop()} transparent>
              <Icon ios="ios-arrow-back" android="md-arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            {!isMyProfile && (
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ color: 'white' }}
              >
                View {userProfile.name && userProfile.name} Profile
              </Text>
            )}
            {isMyProfile && (
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ color: 'white' }}
              >
                View Profile
              </Text>
            )}
          </Body>
          <Right>
            {isMyProfile && (
              <Button iconRight onPress={() => Actions.updateprofile({ uid })}>
                <Icon name="edit" type="FontAwesome" />
              </Button>
            )}
          </Right>
        </Header>

        <Content>
          {loading && <Spinner color={accordionBorderColor} />}
          {!loading && (
            <Content>
              <Card>
                <CardItem>
                  <Body
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Image
                      source={{ uri: url }}
                      style={{ height: 80, width: 80, flex: 1 }}
                    />
                  </Body>
                </CardItem>
              </Card>
              <List>
                {userProfile && (
                  <React.Fragment>
                    <ListItem itemHeader style={styles.listHeader}>
                      <Text style={styles.textHeader}>
                        Personal Information
                      </Text>
                    </ListItem>

                    <ListItem itemHeader style={styles.listHeader}>
                      <Text style={styles.textHeader}>Contact Information</Text>
                    </ListItem>

                    <ListItem itemHeader style={styles.listHeader}>
                      <Left>
                        <Text style={styles.textHeader}>Place Visited</Text>
                      </Left>
                      <Right>
                        <Button transparent dark iconRight>
                          <Text style={styles.link}>All</Text>
                          <Icon name="arrow-forward" />
                        </Button>
                      </Right>
                    </ListItem>

                    <ListItem itemHeader style={styles.listHeader}>
                      <Left>
                        <Text style={styles.textHeader}>My Reviews</Text>
                      </Left>
                      <Right>
                        <Button transparent dark iconRight>
                          <Text style={styles.link}> All</Text>
                          <Icon name="arrow-forward" />
                        </Button>
                      </Right>
                    </ListItem>

                    <ListItem itemHeader style={styles.listHeader}>
                      <Left>
                        <Text style={styles.textHeader}>My Place</Text>
                      </Left>
                      <Right>
                        <Button transparent dark iconRight>
                          <Text style={styles.link}> All</Text>
                          <Icon name="arrow-forward" />
                        </Button>
                      </Right>
                    </ListItem>
                  </React.Fragment>
                )}

                {isMyProfile && !userProfile && (
                  <React.Fragment>
                    <ListItem>
                      <Text>You haven't set up your profile</Text>
                    </ListItem>
                    <ListItem>
                      <Button
                        style={{ margin: 'auto' }}
                        iconRight
                        onPress={() => Actions.updateprofile({ uid })}
                      >
                        <Text>Tap here to update your profile</Text>
                        <Icon name="edit" type="FontAwesome" />
                      </Button>
                    </ListItem>
                  </React.Fragment>
                )}

                {!isMyProfile && !userProfile && (
                  <React.Fragment>
                    <ListItem>
                      <Text danger>
                        There's something wrong. Please try again later!
                      </Text>
                    </ListItem>
                    <ListItem padder button>
                      <Button>
                        <Text>Tap here to go back</Text>
                      </Button>
                    </ListItem>
                  </React.Fragment>
                )}
              </List>
            </Content>
          )}
        </Content>
        <MainFooterBar page={this.props.sceneKey} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  userProfile: state.userProfile.payload,
  loading: state.userProfile.loading
});

export default connect(
  mapStateToProps,
  { navigateToMenu, getUserProfile }
)(ViewProfile);
