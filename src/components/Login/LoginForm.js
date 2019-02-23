import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
  Form,
  Input,
  Label,
  Item,
  Button,
  Container,
  Grid,
  Row
} from 'native-base';

import { emailChanged, passwordChanged, loginUser } from '../../actions';
//import { Card, CardSection, Input, Button, Spinner } from '../common';
import { Spinner } from '../common';

class LoginForm extends Component {
  componentWillUnmount() {}

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    console.log('login user');
    this.props.loginUser({ email, password });
  }

  render() {
    const { email, password, error, loading } = this.props;
    return (
      <Container>
        <Form>
          <Grid style={{ width: '100%', padding: 10 }}>
            <Row style={{ height: 50, width: '100%', marginBottom: 10 }}>
              <Item last padder rounded style={{ width: '100%' }}>
                <Input
                  onChangeText={this.onEmailChange.bind(this)}
                  value={email}
                  placeholder="Email"
                  placeholderTextColor="rgba(0,0,0,0.5)"
                />
              </Item>
            </Row>
            <Row style={{ height: 50, width: '100%', marginBottom: 10 }}>
              <Item last padder rounded style={{ width: '100%' }}>
                <Input
                  secureTextEntry
                  onChangeText={this.onPasswordChange.bind(this)}
                  value={password}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  placeholder="Password"
                />
              </Item>
            </Row>
            {!!error && (
              <Row style={{ height: 50, width: '100%', marginBottom: 10 }}>
                <Text style={styles.errorTextStyle}>{error}</Text>
              </Row>
            )}

            <Row style={{ height: 70, width: '100%', marginBottom: 10 }}>
              {loading ? (
                <Spinner size="large" style={{ width: '100%' }} />
              ) : (
                <Button
                  primary
                  rounded
                  full
                  onPress={this.onButtonPress.bind(this)}
                  style={{ width: '100%' }}
                >
                  <Text style={{ color: 'white' }}>Login</Text>
                </Button>
              )}
            </Row>
          </Grid>
        </Form>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
  }
)(LoginForm);
