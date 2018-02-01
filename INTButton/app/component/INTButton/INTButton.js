// Copyright (C) 2018 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import styles from './styles';

const IconPosition = {
  Left :   'left',
  Right : 'right',
  Top: 'top',
  Bottom: 'bottom'
}

export default class INTButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title:this.props.title || '',
      titleSelected:this.props.titleSelected || '',
      icon:this.props.icon || null,
      iconSelected:this.props.iconSelected || null,
      isSelected:this.props.isSelected || false
    }
  }

  /**
   * Set props according to params received
   * @param {*properties} nextProps 
   */
  componentWillReceiveProps(nextProps){
       if (nextProps.title != undefined) {
        this.setState({title : nextProps.title})
       }
       if (nextProps.titleSelected != undefined) {
        this.setState({titleSelected : nextProps.titleSelected})
       }
       if (nextProps.icon != undefined) {
        this.setState({icon : nextProps.icon})
       }
       if (nextProps.iconSelected != undefined) {
        this.setState({iconSelected : nextProps.iconSelected})
       }
       if (nextProps.isSelected != undefined) {
        this.setState({isSelected : nextProps.isSelected})
       }
  }

  /**
   * default props
   */
  static defaultProps = {
    iconPosition : IconPosition.Left,
    spaceBetweenIconAndTitle : 10,    
    buttonStyle:{}, //Optional
    buttonStyleSelected : {}, //optional
    titleStyle:{},//optional
    titleStyleSelected:{},//optional
    isTextOnlySegment : true,        
  };
 
  /**
   * OnPress method
   */
  onPress(){
    if (this.props.onPress != undefined){
        this.props.onPress();
    }
  }


  render() {
      var isTextOnly = this.props.icon == undefined ? true : false

      var arrStyle =  [styles.button];
      var arrTitleStyle =  [styles.title]  
      var title = this.state.title;
      var icon =  this.state.icon 

      // Add custom style dynamically provided by dev
      arrStyle.push(this.props.buttonStyle)   
      arrTitleStyle.push(this.props.titleStyle)   

      // Add flex direction as per icon position 
      if (this.props.iconPosition == IconPosition.Left || this.props.iconPosition == IconPosition.Right){
        arrStyle.push({flexDirection:'row'})
      }else {
        arrStyle.push({flexDirection:'column'})
      }
      
      //Change style and icon for selected button state
      if (this.state.isSelected == true) {     
        arrTitleStyle.push(this.props.titleStyleSelected) 
        arrStyle.push(this.props.buttonStyleSelected)   
        icon = this.state.iconSelected || this.state.icon 
        title = this.state.titleSelected || this.state.title
      }

      // Add icon and space view if isTextOnly = false default value is true
      var iconView =  <Image key = {1} source = {icon}></Image> 
      var viewSpaceBetween = <View key = {2} style = {{ width:this.props.spaceBetweenIconAndTitle, height : this.props.spaceBetweenIconAndTitle}}></View>
            
      if (isTextOnly == true){
        iconView = null
        viewSpaceBetween = null
      }


      return (
        <TouchableOpacity style= {arrStyle} onPress={() => this.onPress()} activeOpacity= {0.70}>      

          {(this.props.iconPosition == IconPosition.Left || this.props.iconPosition == IconPosition.Top) 
            ? [iconView, viewSpaceBetween]
            : null}
          
          <Text style = {arrTitleStyle}> {title}</Text>      

          {(this.props.iconPosition == IconPosition.Right || this.props.iconPosition == IconPosition.Bottom) 
            ? [viewSpaceBetween,iconView] 
            : null}         
            
      </TouchableOpacity>    
      );
    }
}
