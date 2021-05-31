import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../screens/Main';
import LoginForm from '../components/LoginForm';
import UserScreen from '../screens/UserScreen';

const Stack = createStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
