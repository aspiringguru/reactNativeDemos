/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://facebook.github.io/react-native/docs/flexbox.html#content
 */

 import React, { Component } from 'react';
 import { AppRegistry, Text, TextInput, View } from 'react-native';

 export default class PizzaTranslator extends Component {
   constructor(props) {
     super(props);
     this.state = {text: ''};
   }

   render() {
     return (
       <View style={{padding: 10}}>
         <TextInput
           style={{height: 40}}
           placeholder="Type here to translate!"
           onChangeText={(text) => this.setState({text})}
         />
         <Text style={{padding: 10, fontSize: 42}}>
           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
         </Text>
         <Text style={{padding: 10, fontSize: 42}}>
           {this.state.text.split(' ')[0]}
         </Text>
         <Text style={{padding: 10, fontSize: 42}}>
           {this.state.text.split(' ')[1]}
         </Text>
       </View>
     );
   }
 }

 // skip this line if using Create React Native App
 AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
