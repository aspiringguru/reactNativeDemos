/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://facebook.github.io/react-native/docs/using-a-scrollview.html#content
 *
 */
 import React, { Component } from 'react';
 import { AppRegistry, ScrollView, Image, Text } from 'react-native';

 export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
   render() {
       return (
         <ScrollView>
           <Text style={{fontSize:96}}>Scroll me plz</Text>
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Text style={{fontSize:96}}>If you like</Text>
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Text style={{fontSize:96}}>Scrolling down</Text>
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Text style={{fontSize:96}}>Whats the best</Text>
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Text style={{fontSize:96}}>Framework around?</Text>
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Image source={require('./img/favicon.png')} />
           <Text style={{fontSize:80}}>React Native</Text>
         </ScrollView>
     );
   }
 }

 // skip these lines if using Create React Native App
 AppRegistry.registerComponent(
   'AwesomeProject',
   () => IScrolledDownAndWhatHappenedNextShockedMe);
