import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const SubmitButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.authButton}>
      <Text style={styles.authButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  authButton: {
    height: 64,
    backgroundColor: '#CC8389',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SubmitButton;
