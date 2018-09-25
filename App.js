/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';
import ReduxThunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//import ReduxPromise from "redux-promise";

import reducers from "./src/reducers";

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Header headerText={'Activity Assistance'} />
          <Card />
        </View>
      </Provider>

    );
  }
}




