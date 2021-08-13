import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { View, Text, TextInput, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/button';
import styles from './index.styles';
import { TouchableOpacity } from 'react-native';
import { BASE_COLOR } from '../../styles';
import Clipboard from '@react-native-community/clipboard';
import Snackbar from 'react-native-snackbar';


const TransactionDetail = props => {
  const { navigation } = props;
  const { route } = props;
  const params = route.params.detail;

  const month = {
    1: 'Januari',
    2: 'Febuari',
    3: 'Maret',
    4: 'April',
    5: 'Mei',
    6: 'Juni',
    7: 'Juli',
    8: 'Agustus',
    9: 'September',
    10: 'Oktober',
    11: 'November',
    12: 'Desember'
  }

  const copyToClipboard = () => {
    Clipboard.setString(params.id)
    Snackbar.show({
      text: 'Copied',
      duration: Snackbar.LENGTH_SHORT,
    });
  }

  const dateParse = (date) => {
    let fullDate = date.split(' ');
    let dates = fullDate[0];
    let times = fullDate[1];
    let dateObj = new Date(dates + 'T' + times + 'Z');
    return dateObj.toLocaleDateString().split('/');
  }

  const renderDetail = () => {
    const splitDate = dateParse(params.created_at);
    return (
      <View style={styles.contentDetail}>
        <View style={styles.idTransaction}>
          <Text style={styles.textTitle}>
            ID TRANSAKSI:#{params.id}
          </Text>
          <TouchableOpacity
            onPress={() => copyToClipboard()}
          >
            <Image
              style={styles.iconCopy}
              resizeMode={'contain'}
              source={require('../../assets/img/copy.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailTitle}>
          <Text style={styles.textInfo}>
            DETAIL TRANSAKSI
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: BASE_COLOR }}>
              TUTUP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoDetail}>
          <View style={styles.titleCard}>
            <Text style={styles.textTitle}>{params.sender_bank.toUpperCase()}</Text>
            <Image
              style={styles.sortIcon}
              resizeMode={'contain'}
              source={require('../../assets/img/right-arrow.png')}
            />
            <Text style={styles.textTitle}>{params.beneficiary_bank.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View styles={styles.left}>
            <Text>{params.beneficiary_name}</Text>
            <Text>{params.account_number}</Text>
          </View>
          <View styles={styles.right}>
            <Text style={styles.textInfo}>NOMINAL</Text>
            <Text>Rp. {params.amount}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View styles={styles.left}>
            <Text style={styles.textInfo}>BERITA TRANSFER</Text>
            <Text>{params.remark}</Text>
          </View>
          <View styles={styles.right}>
            <Text style={styles.textInfo}>KODE UNIK</Text>
            <Text>Rp. {params.unique_code}</Text>
          </View>
        </View>
        <View style={styles.date}>
          <Text style={styles.textInfo}>WAKTU DIBUAT</Text>
          <Text>{splitDate[1] + ' ' + month[parseInt(splitDate[0])] + ' ' + splitDate[2]}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerCenter}>
        {renderDetail()}
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;
