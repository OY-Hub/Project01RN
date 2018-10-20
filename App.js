import React from 'react';
import {StyleSheet, Text, Image, View, Dimensions,
      ScrollView, StatusBar } from 'react-native';
import { DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import HomeDrawerItem         from './app/drawer/HomeDrawerItem';
import LoginDrawerItem        from './app/drawer/LoginDrawerItem';
import ProfileDrawerItem      from './app/drawer/ProfileDrawerItem';
import RefreshDrawerItem      from './app/drawer/RefreshDrawerItem';
import SpringDrawerItem       from './app/drawer/SpringDrawerItem';
import SpringFilesDrawerItem  from './app/drawer/SpringFilesDrawerItem';
import PermissionsDrawerItem  from './app/drawer/PermissionsDrawerItem';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

export default class App extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return ( <MainRoot /> );
  }
}

//------------------------------------//
//------------Navigation--------------//
//------------------------------------//

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }} >
          <Image
            source={require('./assets/images/LOGO.jpg')}
            style={{ width: SCREEN_WIDTH * 0.1 }, {height: SCREEN_HEIGHT * 0.2}}
            resizeMode="contain"   />
        </View>
        <View style={{marginLeft: 10}}>
          <DrawerItems {...props} />
        </View>
    </SafeAreaView>
  </ScrollView>
);

const MainRoot = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: HomeDrawerItem,
      header: { visible: true },
    },
    Login: {
      path: '/login',
      screen: LoginDrawerItem,
      header: { visible: false },
    },
    Profile: {
      path: '/profile',
      screen: ProfileDrawerItem,
      header: { visible: false },
    },
    Refresh: {
      path: '/refresh',
      screen: RefreshDrawerItem,
      header: { visible: false },
    },
    Spring: {
      path: '/spring',
      screen: SpringDrawerItem,
      header: { visible: true },
    },
    SpringFiles: {
      path: '/springFiles',
      screen: SpringFilesDrawerItem,
      header: { visible: true },
    },
    Permissions: {
      path: '/permissions',
      screen: PermissionsDrawerItem,
      header: { visible: true },
    }
  },
  {
    initialRouteName: 'SpringFiles',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: 'grey',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 5,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
