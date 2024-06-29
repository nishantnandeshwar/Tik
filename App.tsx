import React from 'react';
import {
  SafeAreaView,
  StatusBar, View,
  useColorScheme,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import NavigateComponent from './src/navigation/navigator.tsx';
import { NavigationContainer, createNavigationContainerRef, } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

export const appNavRef = createNavigationContainerRef();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  setTimeout(() => SplashScreen.hide(), 1500);

  return (
    <SafeAreaView className='flex-1 bg-white dark:bg-slate-800'>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <PaperProvider>
        <NavigationContainer ref={appNavRef}>
          <NavigateComponent />
        </NavigationContainer>
        </PaperProvider>
    </SafeAreaView>
  );
};

export default App;