/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Native componentes
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

// Components
import AnimeHomeScreen from './src/screens/AnimeHomeScreen';
import AnimeDetailScreen from './src/screens/AnimeDetailScreen';

// Configs and styles
import navigatorStyles from './src/components/styles/Navigator';
import theme from './src/components/styles/Theme';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={theme} useDark={false}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AnimeHome" screenOptions={navigatorStyles}>
            <Stack.Screen name="AnimeHome" options={{ title: 'Animanía' }} component={AnimeHomeScreen} />
            <Stack.Screen name="AnimeDetail" component={AnimeDetailScreen} options={{ title: 'Detail' }} initialParams={{ animeId: 0 }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
