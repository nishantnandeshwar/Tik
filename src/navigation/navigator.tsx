// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screen/main';
import { GameScreen } from '../screen/gameScreen';

const Stack = createNativeStackNavigator();

function NavigateComponent() {
  return (
      <Stack.Navigator initialRouteName="StartGame">
        <Stack.Screen name="StartGame" component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name="GameScreen" component={GameScreen} options={{headerShown: true}}/>
      </Stack.Navigator>
  );
}

export default NavigateComponent;