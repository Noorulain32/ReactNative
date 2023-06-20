import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderScreen() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        Welcome to
        <Text style={headerStyles.innerText}> Xposure Salon</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC0CB',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});
