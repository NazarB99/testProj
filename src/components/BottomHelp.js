import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DARK_GREY} from '../commons/Constants';

const BottomHelp = ({text, pressableText, onPress}) => {
  return (
    <View style={styles.signUp}>
      <Text style={{color: DARK_GREY}}>{text}</Text>
      <Text style={styles.signUpText} onPress={onPress}>
        {pressableText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpText: {
    marginLeft: 3,
    textDecorationLine: 'underline',
    color: DARK_GREY,
  },
});

export default BottomHelp;
