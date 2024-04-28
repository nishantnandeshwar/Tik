import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MainScreen } from './src/screen/main';

import SplashScreen from 'react-native-splash-screen'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  setTimeout(()=>SplashScreen.hide(),1000)
  // const scrheight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}
        >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            // height:scrheight-24
          }}
          >
          <MainScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
