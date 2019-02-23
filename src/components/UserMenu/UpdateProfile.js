import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Container,
  Content,
  Header,
  Item,
  Text,
  Left,
  Body,
  Button,
  Icon,
  Form,
  Input,
  Label,
  Textarea,
  Spinner
} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { accordionBorderColor } from '../../../native-base-theme/variables/commonColor';
import MainFooterBar from '../common/MainFooterBar';
import { navigateToMenu } from '../../actions/NavigationActions';
import { updateProfile } from '../../actions/UserProfileActions';

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: '',
        address: '',
        city: '',
        hobby: ''
      },
      formDirty: false
    };
  }

  async componentDidMount() {
    this.props.navigateToMenu();
    console.log(firebase.auth().currentUser);
    await this.props.getUserProfile(this.props.uid);
    if (this.props.userProfile) {
      console.log(this.props.userProfile);
      this.setState({
        ...this.state,
        values: this.props.userProfile
      });
    }
  }

  componentWillUnmount() {
    Actions.pop();
  }

  handleChange(props, val) {
    this.setState({
      formDirty: true,
      values: {
        ...this.state.values,
        props: val
      }
    });
  }

  updateProfile() {}
  render() {
    const { values } = this.state;

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
            <Text style={{ color: 'white' }}>Update Profile</Text>
          </Body>
        </Header>
        <Content>
          {this.props.loading && !this.state.formDirty ? (
            <Spinner color={accordionBorderColor} />
          ) : (
            <Form>
              <Item stackedLabel underline={false}>
                <Label>Name</Label>
                <Input
                  bordered
                  placeholder="Full name"
                  onChangeText={value => this.handleChange('name', value)}
                  style={styles.rootInput}
                  value={values.name}
                />
              </Item>

              <Item stackedLabel underline={false}>
                <Label>Address</Label>
                <Input
                  bordered
                  placeholder="Address"
                  onChangeText={value => this.handleChange('address', value)}
                  style={styles.rootInput}
                  value={values.address}
                />
              </Item>

              <Item stackedLabel underline={false}>
                <Label>City</Label>
                <Input
                  bordered
                  placeholder="city"
                  onChangeText={value => this.handleChange('city', value)}
                  style={styles.rootInput}
                  value={values.city}
                />
              </Item>

              <Item stackedLabel underline={false}>
                <Label>Hobby</Label>
                <Textarea
                  rowSpan={3}
                  bordered
                  placeholder="Your hobbies, favourites"
                  onChangeText={value => this.handleChange('hobby', value)}
                  style={styles.rootInput}
                  value={values.hobby}
                />
              </Item>

              <Item />
            </Form>
          )}
        </Content>
        <MainFooterBar page={this.props.sceneKey} />
      </Container>
    );
  }
}

const styles = {
  rootInput: {
    width: '100%'
  }
};

const mapStateToProps = state => ({
  userProfile: state.userProfile.payload,
  loading: state.userProfile.loading
});

export default connect(
  mapStateToProps,
  { navigateToMenu, updateProfile }
)(UpdateProfile);
