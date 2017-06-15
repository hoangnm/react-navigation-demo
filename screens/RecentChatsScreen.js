import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat1', { user: 'Lucy' })}
          title="Chat with Lucy2"
        />
      </View>
    );
  }
}
