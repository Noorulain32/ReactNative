# ReactNative
# App.js for navigation

import * as React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from './Screens/MenuScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import FeedbackScreen from './Screens/FeedbackScreen';
import HeaderScreen from './Screens/HeaderScreen';


//instantiate stack
const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
