/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import MainApp from 'MainApp'
import {store} from 'AppRedux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
        <MainApp />
    </Provider>
  );
};

console.disableYellowBox = true;

export default App;
