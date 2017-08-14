/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://facebook.github.io/react-native/docs/flexbox.html#content
 */

 import React, { Component } from 'react';
 import { AppRegistry, View } from 'react-native';

 export default class JustifyContentBasics extends Component {
   render() {
     return (
       // Try setting `justifyContent` to `center`. space-between
       // Try setting `flexDirection` to `row`.
       <View style={{
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'center',
       }}>
         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
         <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
       </View>
     );
   }
 };

 // skip this line if using Create React Native App
 AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);
