import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {PropTypes} from 'prop-types';

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButton: {
    width: 30,
    height: 30,
  },
  buttonFlex: {
    flex: 0.15,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const Header = props => {
  const {onBackPress, headerTitle} = props;

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.buttonFlex} onPress={onBackPress}>
        <Image
          style={styles.backButton}
          source={require('src/assets/img/arrow-back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      <View style={styles.buttonFlex} />
    </View>
  );
};

Header.propTypes = {
  onBackPress: PropTypes.func,
  headerTitle: PropTypes.string,
  style: PropTypes.object,
};

export default Header;
