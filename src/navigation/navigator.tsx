// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screen/main';



function HomeScreen( props:any ) {
  console.log("props<<<",props)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={()=> props.navigation.navigate('StartGame')}>
        <View>
          <Text>Go to Main</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function NavigateComponent() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="StartGame" component={MainScreen} />
      </Stack.Navigator>
  );
}

export default NavigateComponent;