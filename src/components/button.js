import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BASE_COLOR, BLACK_COLOR, STRING_COLOR, WHITE_COLOR} from '../styles';

const Button = ({item, callback}) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        ...(item?.mode === 'outline'
          ? styles.outlineButton
          : styles.defaultButton),
        ...item?.style,
      }}
      onPress={() => callback()}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          ...(item?.mode === 'outline'
            ? styles.outlineButtonTextColor
            : styles.defaultButtonTextColor),
        }}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: BASE_COLOR,
    borderWidth: 0,
  },
  defaultButtonTextColor: {
    color: STRING_COLOR,
  },
  outlineButton: {
    backgroundColor: WHITE_COLOR,
    borderColor: BASE_COLOR,
    borderWidth: 2,
  },
  outlineButtonTextColor: {
    color: BLACK_COLOR,
  },
});

export default Button;
