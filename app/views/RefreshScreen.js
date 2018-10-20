import React from 'react';
import {StyleSheet, Text, Image, View, Dimensions, ScrollView} from 'react-native';
import {RefreshControlComponent} from '../components/commons/RefreshControl';
import {NavigationOpenDrawerButton} from '../components/commons/NavigationHeaderButtons'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;
const PageTitle = 'RefreshScreen';

export default class RefreshScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Refresh',
    headerLeft: <NavigationOpenDrawerButton navigation={navigation}/>
  });

  render() {
    return (
      <RefreshControlComponent />
    );
  }
}
