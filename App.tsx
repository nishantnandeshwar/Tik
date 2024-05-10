import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  TextInput, Text,
  View, ScrollView,
  StyleSheet,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import { MainScreen } from './src/screen/main';
import NavigateComponent from './src/navigation/navigator.tsx';
import { NavigationContainer,createNavigationContainerRef, } from '@react-navigation/native';

export const appNavRef = createNavigationContainerRef();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  setTimeout(() => SplashScreen.hide(), 1000);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? Colors.black : Colors.white, }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.black : Colors.white}
      />
      <NavigationContainer ref={appNavRef}>
        <NavigateComponent />
      </NavigationContainer>
    </SafeAreaView>
    // <SafeAreaView
    // style={{
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //   }}>
    // <StatusBar
    //   barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //   backgroundColor={isDarkMode ? Colors.black : Colors.white}
    // />
    //   <NavigationContainer>
    //     <NavigateComponent />
    //   </NavigationContainer>
    //   <View style={[styles.container]}>
    //     <ScrollView>
    //       <MainScreen />
    //     </ScrollView> 
    //   </View> 
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    flex: 1
  }
});

export default App;
// In App.js in a new project


// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   setTimeout(() => SplashScreen.hide(), 1000);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;