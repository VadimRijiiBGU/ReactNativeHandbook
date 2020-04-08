/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import thunk from 'redux-thunk';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from './src/reducers/index';
import HomeScreen from './src/screens/HomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TodoScreen from './src/screens/TodoScreen';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createStackNavigator({
    Home: HomeScreen,
    loginFlow: createSwitchNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen
    }),
    Todo: TodoScreen
});

const AppNavigator = createAppContainer(switchNavigator);

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator ref={(navigator) => setNavigator(navigator)}/>
            </Provider>
        );
    }
}
