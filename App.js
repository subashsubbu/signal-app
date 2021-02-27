import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './screens/login';
import register from './screens/register';

const GlobalScreenOptions = {
  headerStyle: { backgroundColor: 'grey' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white'
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={GlobalScreenOptions}>
        <Stack.Screen name='Login' component={login} />
        <Stack.Screen name='Register' component={register} />

      </Stack.Navigator>

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

{
  





}


















