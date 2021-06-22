import React from 'react';
import { Image, TextInput, View, StyleSheet, Platform } from "react-native";
import {DARK_GREY} from '../commons/Constants';

const AuthInput = ({
  image,
  width,
  height,
  placeholder,
  isPasswordInput,
  value,
  onChange,
}) => {
  return (
    <View style={styles.input}>
      <Image
        style={styles.inputImage}
        width={width}
        height={height}
        source={image}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={DARK_GREY}
        style={styles.authInput}
        value={value}
        autoCapitalize="none"
        onChangeText={text => onChange(text)}
        secureTextEntry={isPasswordInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 32,
    justifyContent: 'center',
    marginBottom: 35,
  },
  inputImage: {
    position: 'absolute',
    left: 3,
  },
  authInput: {
    height: 32,
    borderBottomWidth: 0.3,
    borderBottomColor: '#A3A3A3',
    fontSize: 16,
    paddingLeft: 28,
    paddingBottom: Platform.OS === 'android' ? 5 : 0,
  },
});

export default AuthInput;
