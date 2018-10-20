import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ProfileScreen from '../views/ProfileScreen';

const ProfileDrawerItem = StackNavigator({
    Playground: { screen: ProfileScreen }
  }
);

ProfileDrawerItem.navigationOptions = {
  drawerLabel: 'ProfileDrawerItem',
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

export default ProfileDrawerItem;
