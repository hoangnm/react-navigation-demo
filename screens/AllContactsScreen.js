import React from 'react';
import {
  Text
} from 'react-native';

export default class AllContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',
  };
  render() {
    return <Text>List of all contacts</Text>
  }
}