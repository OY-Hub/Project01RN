import React from 'react';
import {StyleSheet, Text, Image, View,ImageBackground, Dimensions, ScrollView} from 'react-native';
// import { Font } from 'expo';

import {NavigationOpenDrawerButton} from '../components/commons/NavigationHeaderButtons';
import {OUserCard} from '../components/items/OUserCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;
const BG_IMAGE = require('../../assets/images/bg_screen3.jpg');
export default class ProfileScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
    title: 'Profile',
    headerLeft: <NavigationOpenDrawerButton navigation={navigation}/>
  });

  constructor(props) {
    super(props);

    this.state = {
      resourceLoaded: false,
    };
  }

  componentDidMount() {

    this.setState({ resourceLoaded: true });
  }

  render() {
    const {resourceLoaded} = this.state;
    return (
      <View style={styles.container}>
      <ImageBackground
        source={BG_IMAGE}
        style={styles.bgImage}
      >
    {  this.resourceLoaded ? <Text>Loading...</Text> :
          <View>
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>
                Profile
              </Text>
            </View>
            <ScrollView style={{flex: 1, marginBottom: 20, flexDirection: 'column'}}>
                <OUserCard card={'Card-1'} />
                <OUserCard card={'Card-2'} />
                <OUserCard card={'Card-3'} />
                <OUserCard card={'Card-4'} />
                <OUserCard card={'Card-5'} />
            </ScrollView>
          </View>
    }
</ImageBackground>
</View>

      );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293046',
    width: SCREEN_WIDTH,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'white',
    fontSize: 25,
    // fontFamily: 'lightitalic',
    marginLeft: 20
  },
  topView: {
    flex: 2,
    width: SCREEN_WIDTH,
    height: 50,
    backgroundColor: 'green',
  },
  bottomView: {
    flex: 5,
    width: SCREEN_WIDTH,
    height: 50,
    backgroundColor: 'red',
  },
  bottomLeftView: {

  },
  bottomRightView: {

  },
})
