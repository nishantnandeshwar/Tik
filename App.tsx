import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  TextInput,Text,
  View, ScrollView,
  StyleSheet,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import { MainScreen } from './src/screen/main';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  setTimeout(() => SplashScreen.hide(), 1000);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.black : Colors.white}
      />
      <View style={[styles.container]}>
        <ScrollView>
          <MainScreen />
        </ScrollView>
      </View>
    </SafeAreaView>
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
