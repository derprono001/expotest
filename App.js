import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { StyleProvider } from 'native-base';
import { createLogger } from 'redux-logger';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

class App extends Component {
  constructor(props) {
    super(props);

    const config = {
      apiKey: 'AIzaSyDfuR6HkFNFAzlSeP30KVU8jRT-KFuPQfo',
      authDomain: 'manager-bc45f.firebaseapp.com',
      databaseURL: 'https://manager-bc45f.firebaseio.com',
      projectId: 'manager-bc45f',
      storageBucket: 'manager-bc45f.appspot.com',
      messagingSenderId: '955345807214'
    };
    firebase.initializeApp(config);
  }

  render() {
    const composeEnhancers =
      global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      reducers,
      process.env.NODE_ENV === 'production'
        ? applyMiddleware(ReduxThunk)
        : composeEnhancers(applyMiddleware(ReduxThunk, createLogger()))
    );

    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(material)}>
          <Router />
        </StyleProvider>
      </Provider>
    );
  }
}

export default App;
