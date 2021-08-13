import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {BASE_COLOR} from '../styles';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    color: BASE_COLOR,
    paddingLeft: 4,
    fontWeight: 'bold',
  },
});

const TextButton = props => {
  const {onPress, label, style, textStyle} = props;
  return (
    <TouchableOpacity style={{...styles.text, ...style}} onPress={onPress}>
      <Text style={{...styles.button, ...textStyle}}>{label}</Text>
    </TouchableOpacity>
  );
};

TextButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

export default TextButton;
