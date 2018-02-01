/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import INTButton from './app/component/INTButton'

export default class App extends Component {
  render() {
    return (
      <View style={{padding: 10,backgroundColor:'white',justifyContent:'flex-start', alignItems:'flex-start' }}>
        <INTButton  
          buttonStyle = {{alignSelf:'flex-start', padding : 10, borderRadius:5 , borderWidth:1, borderColor:'black',height : 50,marginTop:10}}
          buttonStyleSelected = {{backgroundColor : 'transparent'}}
          title = 'Button'
          titleSelected = 'Favorite' 
          icon = {require('./images/ic_heart.png')}
          iconSelected = {require('./images/top_heart_selected.png')}
          iconPosition = 'left'
          isSelected = {true}
          spaceBetweenIconAndTitle = {2}
          titleStyle = {{color : 'black'}}
          titleStyleSelected = {{color : 'black'}}
          onPress = {() => {console.log('Button Tapped')}}
        />
      </View>
    );
  }
}

