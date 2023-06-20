# Feedback Form

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const FeedbackScreen = () => {
 
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingSection}>How was your visit to Xposure Salon?</Text>
      <TextInput value={firstName} onChangeText={onChangeFirstName} style={styles.input} />
      <TextInput value={lastName} onChangeText={onChangeLastName} style={styles.input} />
      <TextInput value={message} onChangeText={onChangeMessage} style={styles.messageInput} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'black',
    backgroundColor: '#FFC0CB',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FFC0CB',
  },
  infoSection: {
    fontSize: 24,
    padding: 40,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#FFC0CB',
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#FFC0CB',
  },
});

export default FeedbackScreen;
