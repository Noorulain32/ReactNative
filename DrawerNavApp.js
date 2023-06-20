import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './components/MenuScreen'
import WelcomeScreen from './components/WelcomeScreen'
const Drawer = createDrawerNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
	    useLegacyImplementation
        screenOptions={{ drawerPosition: 'right' }}>
        <Drawer.Screen name="Menu" component={MenuScreen} />
        <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
