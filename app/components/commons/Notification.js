import React from 'react';
import {StyleSheet, Text, Image, View, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

const NOTIF_INFO = require('../../../assets/images/NOTIF_INFO.png');
const NOTIF_WARN = require('../../../assets/images/NOTIF_WARN.png');
const NOTIF_ERROR = require('../../../assets/images/NOTIF_ERROR.png');
const NOTIF_SUCCESS = require('../../../assets/images/NOTIF_SUCCESS.png');
const SCREEN_WIDTH = Dimensions.get('window').width;

export class Notification extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hidden: this.props.hidden,
      type: this.props.type,
      message: this.props.message,
    }
    console.log("hidden:" + this.state.hidden);
    console.log("type:" + this.state.type );
    console.log("message:" + this.state.message);

  }

  _onClose = () => {
    console.log("Closing...");
    this.setState({
      hidden: true
    });
  }
  render() {
    if (!this.state.hidden) {
      if (this.state.type === 'INFO') {
        return (
          <TouchableHighlight onPress={this._onClose} style={styles.container}>
             <View style={styles.info}>
                  <View style={styles.iconNotifStyles} >
                    <Image source={NOTIF_INFO} />
                  </View>
                  <View style={styles.messageNotifStyle}>
                    <Text> {this.state.message} </Text>
                  </View>
             </View>
          </TouchableHighlight>
        );
      }else if(this.state.type === 'WARN') {
        return (
          <TouchableHighlight onPress={this._onClose} style={styles.container}>
             <View style={styles.warn}>
                  <View style={styles.iconNotifStyles} >
                    <Image source={NOTIF_WARN} />
                  </View>
                  <View style={styles.messageNotifStyle}>
                    <Text> {this.state.message} </Text>
                  </View>
             </View>
          </TouchableHighlight>
        );
      }else if(this.state.type === 'ERROR'){
        return (
        <TouchableHighlight onPress={this._onClose} style={styles.container}>
           <View style={styles.error}>
                <View style={styles.iconNotifStyles} >
                  <Image source={NOTIF_ERROR} />
                </View>
                <View style={styles.messageNotifStyle}>
                  <Text> {this.state.message} </Text>
                </View>
           </View>
        </TouchableHighlight>
      );
      }else if(this.state.type === 'SUCCESS'){
        return (
          <TouchableHighlight onPress={this._onClose} style={styles.container}>
           <View style={styles.success}>
                <View style={styles.iconNotifStyles} >
                  <Image source={NOTIF_SUCCESS} />
                </View>
                <View style={styles.messageNotifStyle}>
                  <Text> {this.state.message} </Text>
                </View>
           </View>
        </TouchableHighlight>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: 20,
    maxHeight: 51,
    padding: 10,
  },
  iconNotifStyles: {
    width: 32,
    height: 32,
  },
  messageNotifStyle: {
    width: SCREEN_WIDTH - 45,
    paddingLeft: 5,
    marginTop: 5,
  },
  info: {
    backgroundColor: '#6bd7ff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  warn: {
    backgroundColor: '#ffd470',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  error: {
    backgroundColor: '#ff709d',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  success: {
    backgroundColor: '#70ff8e',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  }
});
