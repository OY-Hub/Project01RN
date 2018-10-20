import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SpringFilesScreen from '../views/SpringFilesScreen';

const SpringFilesDrawerItem = StackNavigator(
  {Playground: { screen: SpringFilesScreen } }
);

SpringFilesDrawerItem.navigationOptions = {

  drawerLabel: 'SpringFilesDrawerItem',
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

export default SpringFilesDrawerItem;
