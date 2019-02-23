import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleProvider, Button, Icon, Text } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

const withNativebaseTheme = (Component) => (props) => (
  <StyleProvider style={getTheme(material)}>
    <Component {...props} />
  </StyleProvider>
);

const backBtn = () => (
  <Button iconLeft onPress={() => Actions.pop()} transparent>
    <Icon ios="ios-arrow-back" android="md-arrow-back" />
    <Text>Back</Text>
  </Button>
);

export { backBtn, withNativebaseTheme };
