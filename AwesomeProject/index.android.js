/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://facebook.github.io/react-native/docs/handling-touches.html#content
 */

 import React, { Component } from 'react';
 import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

 export default class ButtonBasics extends Component {
   _onPressButton() {
     Alert.alert('You tapped the button!')
   }
   _onPressButton2() {
     Alert.alert('You tapped the button 2!')
   }
   _onPressButton3() {
     Alert.alert('You tapped the button 3!')
   }

   render() {
     return (
       <View style={styles.container}>
         <View style={styles.buttonContainer}>
           <Button
             onPress={this._onPressButton}
             title="Press Me"
           />
         </View>
         <View style={styles.buttonContainer}>
           <Button
             onPress={this._onPressButton2}
             title="Press Me"
             color="#841584"
           />
         </View>
         <View style={styles.alternativeLayoutButtonContainer}>
           <Button
             onPress={this._onPressButton3}
             title="This looks great!"
           />
           <Button
             onPress={this._onPressButton}
             title="OK!"
             color="#841584"
           />
         </View>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonContainer: {
     margin: 20
   },
   alternativeLayoutButtonContainer: {
     margin: 20,
     flexDirection: 'row',
     justifyContent: 'space-between'
   }
 })

 // skip this line if using Create React Native App
 AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
