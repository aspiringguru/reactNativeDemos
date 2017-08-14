/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class Greeting extends Component {
  render() {
    return ( <Text>Hello {this.props.name}! </Text> );
  }//end render()
}//end class Greeting extends Component

export default class AwesomeProject extends Component {
//export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Greeting name='Matthew' />
        <Greeting name='Mark' />
        <Greeting name='Luke' />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
