import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { RED, WHITE_COLOR } from '../styles';
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  radioOutline: {
    height: 24,
    width: 24,
    borderRadius: 24,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: RED,
  },
  radio: {
    width: 14,
    height: 14,
    borderRadius: 14,
  },
  radioActive: {
    backgroundColor: RED,
  },
  radioInactive: {
    backgroundColor: WHITE_COLOR,
  },
});

const RadioButton = props => {
  const { selected, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.radioOutline}>
      <View
        style={{
          ...styles.radio,
          ...(selected ? styles.radioActive : styles.radioInactive),
        }}
      />
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  selected: PropTypes.bool,
  onPress: PropTypes.func,
};

export default RadioButton;
