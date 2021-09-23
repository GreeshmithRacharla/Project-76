import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <StackView.Navigator initialRouteName = "Home" screenOptions={{headerShown : false}}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
      </StackView.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
