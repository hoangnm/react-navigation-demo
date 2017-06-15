import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Drawer from 'react-native-drawer';
import { NavigationActions } from 'react-navigation';

import ControlPanel from './ControlPanel';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import RecentChatsScreen from './screens/RecentChatsScreen';
import AllContactsScreen from './screens/AllContactsScreen';

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen }
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const menus = ['Home', 'Contact', 'Chat'];

const stack1 = StackNavigator({
  Home1: { screen: MainScreenNavigator },
  Chat1: {
    screen: ChatScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.user}`,
    })
  }
});

const stack2 = StackNavigator({
  ChatContent: {
    screen: ChatScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Chat',
    })
  }
});
const stack3 = StackNavigator({
  Contact1: { screen: AllContactsScreen }
});

const SimpleApp = StackNavigator({
  Home: { screen: stack1 },
  Chat: { screen: stack2 },
  Contact: { screen: stack3 }
}, {
  headerMode: 'none'
});

class MainApp extends React.Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = (name) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: name})
      ]
    });
    this.navigator && this.navigator.dispatch(resetAction);
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
      ref={(ref) => this._drawer = ref}
      type={'overlay'}
      content={<ControlPanel items={menus} closeDrawer={this.closeDrawer} />}
      onOpen={() => {
        this.setState({drawerOpen: true})
      }}
      onClose={() => {
        this.setState({drawerOpen: false})
      }}
      tapToClose
      openDrawerOffset={0.2}
      panCloseMask={0.2}
      panOpenMask={0.2}
      negotiatePan
      acceptPanOnDrawer={false}
      acceptPan={true}
      tweenHandler={(ratio) => {
        return ({
          main: { opacity: Math.max(0.54, 1 - ratio) }
        });
      }}>
        <SimpleApp ref={nav => { this.navigator = nav; }}/>
      </Drawer>
    );
  }
};

AppRegistry.registerComponent('SimpleApp', () => MainApp);