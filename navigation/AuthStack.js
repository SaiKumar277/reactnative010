import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import Signpage from '../components/Signpage';
const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen name='Signpage' component={Signpage} options={{ header: () => null }} />
    </Stack.Navigator>
  );
}