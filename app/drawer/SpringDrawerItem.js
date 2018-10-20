import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SpringScreen from '../views/SpringScreen';

const SpringDrawerItem = StackNavigator(
  {Playground: { screen: SpringScreen } }
);

SpringDrawerItem.navigationOptions = {

  drawerLabel: 'SpringDrawerItem',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="account-box"
      size={20}
      iconStyle={{width: 20, height: 20 }}
      type="material"
      color={tintColor}
    />
  ),
};

export default SpringDrawerItem;
