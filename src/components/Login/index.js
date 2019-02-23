/* eslint-disable no-extra-boolean-cast */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Item } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import LoginForm from './LoginForm';

import { viewportHeight } from '../common/constVar';

class Login extends Component {
  componentDidMount() {
    console.log(firebase.auth().currentUser);
    if (firebase.auth().currentUser) {
      Actions.main();
    }
  }

  render() {
    const url =
      'http://i0.wp.com/sgtravelconnect.com/wp-content/uploads/2018/06/cropped-TravelConnect.sg-Logo-V3-1.jpg?fit=512%2C512'; //change later to img

    return (
      <Container>
        <Content>
          <Grid>
            <Row
              style={{
                height: 400
              }}
              size={2}
            >
              <Image source={{ uri: url }} style={{ width: '100%' }} />
            </Row>

            <Row
              style={{
                backgroundColor: 'rgba(0,0,0,0.05)',
                height: viewportHeight - 400,
                paddingTop: 100
              }}
              size={1}
            >
              <Item
                style={{
                  position: 'absolute',
                  top: 50,
                  width: '100%',
                  padding: 10
                }}
                padder
              >
                <LoginForm />
              </Item>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default Login;
