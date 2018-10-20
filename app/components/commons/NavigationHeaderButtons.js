import React from 'react';
import {View} from 'react-native';
import { Icon } from 'react-native-elements';

export class NavigationOpenDrawerButton extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{marginLeft: 20}}>
        <Icon name='bars' type='font-awesome' color='#548ff7'
        onPress={() =>  this.props.navigation.navigate('DrawerToggle')} />
      </View>
    );
  }
}

export class NavigationBackButton extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{marginLeft: 20}}>
        <Icon name='arrow-left' type='font-awesome' color='#548ff7'
        onPress={() =>  this.props.navigation.goBack()} />
      </View>
    );
  }
}
