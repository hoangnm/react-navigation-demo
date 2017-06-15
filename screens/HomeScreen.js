import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat1')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
