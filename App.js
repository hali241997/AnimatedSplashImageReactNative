import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount() {
    // setTimeout(() => {
      SplashScreen.hide()
    // }, 2000);
  }
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />

        <Text>Hello</Text>
      </View>
    );
  }
}

export default App;