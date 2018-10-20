import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import PermissionsScreen from '../views/PermissionsScreen';

const PermissionsDrawerItem = StackNavigator({
    Playground: { screen: PermissionsScreen }
  }
);

PermissionsDrawerItem.navigationOptions = {
  drawerLabel: 'PermissionsDrawerItem',
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

export default PermissionsDrawerItem;
