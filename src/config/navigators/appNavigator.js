import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

import MainScreen from '../../screens/MainScreen/mainScreen';
import color from '../../common/color';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.orange,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Reddit" component={MainScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
