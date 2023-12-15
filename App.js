import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './pages/Loading';
import HomeScreen from './pages/Home';

const Stack = createStackNavigator();

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'poppins-semi-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
        'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;