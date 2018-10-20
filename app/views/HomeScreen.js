import React, { Component } from 'react';
import {Platform, Dimensions, StyleSheet, Text, Image, View,Button, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import {NavigationOpenDrawerButton, NavigationBackButton} from '../components/commons/NavigationHeaderButtons'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class HomeScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerLeft: <NavigationOpenDrawerButton navigation={navigation}/>
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Hello
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
