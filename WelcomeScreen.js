import * as React from 'react';
import { ScrollView, Text , StyleSheet, Image , useColorScheme} from 'react-native';

import MenuScreen from './MenuScreen';
import HeaderScreen from './HeaderScreen';
 

export default function WelcomeScreen() {
  const colorScheme = useColorScheme(); 

  return (
    <ScrollView 
    style={[ 
          styles.container, 
          colorScheme === 'light' ? { backgroundColor: 'white' } 
              : { backgroundColor: '#333333' }, 
                ]}> 
                <Image 
                  style={styles.logo} 
                  source={require('./src/img/XposureLogo.png')}
                  resizeMode="center" 
                  accessible={true} 
                  accessibilityLabel={'XposureLogo'} 
           />     
      <Text style={styles.regular}>Color Scheme: {colorScheme}</Text> 
      <HeaderScreen />
    <MenuScreen/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
  },
  logo :
  {
    height: 300,
    width:  300,
    resizeMode:'repeat',
  },
});
