import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import MOCK_IMAGE from '../assets/box_mock.png';

import {useRoute} from '@react-navigation/native';
import {WINDOW_WIDTH} from '../styles';

const ChildMenu = (
  navigation,
  text,
  direction,
  asset,
  assetActive,
  style = {},
  width = 20,
  height = 20,
  styleIcon = {},
  styleText = {},
) => {
  const route = useRoute();

  return (
    <TouchableOpacity
      onPress={() => navigation.replace(direction)}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <>
        <Image style={{width: 30, height: 30}} source={MOCK_IMAGE} />

        <Text
          style={[
            {
              color: route.name === direction ? 'black' : 'black',
              height: 20,
            },
            styleText,
          ]}>
          {text}
        </Text>
      </>
    </TouchableOpacity>
  );
};
export const Footer = ({navigation}) => {
  return (
    <View
      style={{
        width: WINDOW_WIDTH,
        backgroundColor: 'white',
        borderTopColor: '#0000000D',
        borderTopWidth: 1,
        elevation: 2,
        height: 70,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {ChildMenu(navigation, 'Beranda', 'Beranda', MOCK_IMAGE, MOCK_IMAGE)}
      {ChildMenu(navigation, 'Riwayat', 'Riwayat', MOCK_IMAGE, MOCK_IMAGE)}
      {ChildMenu(navigation, 'Menu', 'Menu', MOCK_IMAGE, MOCK_IMAGE)}
      {ChildMenu(navigation, 'Pesan', 'Pesan', MOCK_IMAGE, MOCK_IMAGE)}
      {ChildMenu(navigation, 'Profil', 'Profil', MOCK_IMAGE, MOCK_IMAGE)}
    </View>
  );
};
