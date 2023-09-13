import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import Login from './Screens/login';
import Signup from './Screens/register';
import Home from './Screens/home';
import orderpart from './Screens/orderpart';

const Stack = createStackNavigator();

const backgroundImageSource = require('./assets/second.png'); // Define the background image source

export default function App() {
  return (
    <NavigationContainer>
      <ImageBackground
        source={backgroundImageSource} // Use the background image source here
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="orderpart" component={orderpart} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
