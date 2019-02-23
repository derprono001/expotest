import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
  'Warning: componentWillUpdate',
  'Setting a timer for a long period of time, ',
  'Remote debugger'
]);

AppRegistry.registerComponent('manager', () => App);
