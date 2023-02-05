/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/HomePage';
import TabBar from './src/components/TabBar';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const BottomNavigation= ()=> {
//   return (
//     <Tab.Navigator tabBar={props => <TabBar {...props} />}>
//       <Tab.Screen name="Home" component={HomePage} />
//     </Tab.Navigator>
//   );
// }


export default App;
