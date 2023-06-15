//# ReactNative
//This Code is For Beginner.
  
  //Header.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function XposureSalonHeader() {
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



//app.js
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import MenuItems from './Components/MenuItems';
import XposureSalonHeader from './Components/XposureSalonHeader';


export default function App() {
  return (
    <View style={styles.container}>
      <XposureSalonHeader />
      <MenuItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
  },
});





//MenuItems.js
 import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const pink = '#FF69B4';
const white='white';

const menuItemsToDisplay = [
    { name: 'Waxing', id: '1A' },
    { name: 'Threading', id: '2B' },
    { name: 'Facials', id: '3C' },
    { name: 'Massages', id: '4D' },
    { name: 'Manicure', id: '5E' },
    { name: 'Pedicure', id: '6F' },
    { name: 'Hair Treatments', id: '7G' },
    { name: 'Hair Masks', id: '8H' },
    { name: 'Eyebrows Microblading', id: '9I' },
    { name: 'Bridal Makeup', id: '10J' },
    { name: 'Party Makeup', id: '11K' },	
    { name: 'Hair Styling', id: '12L' },
    { name: 'Bread Sticks', id: '13M' },
    { name: 'Pita Pocket', id: '14N' },
    { name: 'Lentil Soup', id: '15O' },
    { name: 'Greek Salad', id: '16Q' },
    { name: 'Rice Pilaf', id: '17R' },
    { name: 'Baklava', id: '18S' },
    { name: 'Tartufo', id: '19T' },
    { name: 'Tartufo', id: '20U' },
    { name: 'Tiramisu', id: '21V' },
    { name: 'Panna Cotta', id: '22W' },
  ];

  const Separator = () => <View style={menuStyles.separator} />;

  const Header = () =>  <Text style={menuStyles.headerText}>View Services</Text> ;

  const Footer = () => (
    <Text style={menuStyles.footerText}>
      All Rights Reserved by Xposure 2023
    </Text>
  )


const Item = ({ name }) => {
    return (
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
        </View>
    );
};

const MenuItems = () => {
    const renderItem = ({ item }) => <Item name={item.name} />;
  
    return (
      <View style={menuStyles.container}>
        <FlatList
            data={menuItemsToDisplay} 
             renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={Separator}
             ListHeaderComponent={Header}
            ListFooterComponent={Footer}
        />
      </View>
    );
  };

  const menuStyles = StyleSheet.create({
    container: {
      flex: 0.95,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: '#333333',
    },
    sectionHeader: {
      backgroundColor: '#fbdabb',
      color: '#333333',
      fontSize: 40,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: '#F4CE14',
      fontSize: 32,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#EDEFEE',
    },
    footerText: {
      color: '#EDEFEE',
      fontSize: 20,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
  });
  
export default MenuItems;

