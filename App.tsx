// App.tsx
import React from 'react';

import {
  SafeAreaView,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StorybookUIRoot from './.storybook'; // Import Storybook UI
import { Colors } from 'react-native/Libraries/NewAppScreen';

const isStorybook = false; // Change this to false to use the main app


// Main App Component
const MainApp = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        {'Aamir'}
      </View>
    </SafeAreaView>
  );
};
// Reset AsyncStorage for debugging purposes
AsyncStorage.clear();

const App = isStorybook ? (
  <StorybookUIRoot /> // Load Storybook
) : (
  <MainApp /> // Load main app
);


// Section component and styles remain unchanged...

export default App;
