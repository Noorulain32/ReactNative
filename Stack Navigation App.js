import * as React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from './Screens/MenuScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import FeedbackScreen from './Screens/FeedbackScreen';
import HeaderScreen from './Screens/HeaderScreen';
import LoginScreen from './Screens/LoginScreen';

//instantiate stack
const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
