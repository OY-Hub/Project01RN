import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import RefreshScreen from '../views/RefreshScreen';

const RefreshDrawerItem = StackNavigator({
    Playground: { screen: RefreshScreen }
  }
);

RefreshDrawerItem.navigationOptions = {
  drawerLabel: 'RefreshDrawerItem',
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

export default RefreshDrawerItem;
