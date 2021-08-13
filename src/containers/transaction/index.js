import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { View, Text, TextInput, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/button';
import { BASE_COLOR, BLACK_COLOR } from '../../styles';
import styles from './index.styles';
import axios from 'react-native-axios';
import RadioButton from '../../components/radioButton';
import { TouchableOpacity } from 'react-native';
import { GREEN_COLOR, RED, WHITE_COLOR } from '../../styles';



const Transaction = props => {
  const { navigation } = props;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [sortModal, setSortModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const apiTest = 'https://nextar.flip.id/frontend-test';
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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSortModal(false);
    let sortData = [];
    switch (selectedSort) {
      case 1:
        sortData = data.slice().sort((a, b) => {
          let nameA = a.beneficiary_name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.beneficiary_name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        break;
      case 2:
        sortData = data.slice().sort((a, b) => {
          let nameA = a.beneficiary_name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.beneficiary_name.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        break;
      case 3:
        sortData = data.slice().sort((a, b) => dateParse(b.created_at) - dateParse(a.created_at));
        break;
      case 4:
        sortData = data.slice().sort((a, b) => dateParse(a.created_at) - dateParse(b.created_at));
        break;
      default:
        fetchData();
        break;
    }
    console.log("sorting", sortData);
    setData(sortData);
  }, [selectedSort])

  const fetchData = props => {
    setIsLoading(true);
    axios.get(apiTest)
      .then(function (response) {
        let objData = response.data;
        let resData = Object.keys(response.data).map(i => objData[i]);
        console.log(resData);
        setData(resData);
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const dateParse = (date) => {
    let fullDate = date.split(' ');
    let dates = fullDate[0];
    let times = fullDate[1];
    return new Date(dates + 'T' + times + 'Z');
  }

  const renderSearchbar = () => {
    return (
      <View style={styles.searchbar}>
        <View style={styles.wrapInputIcon}>
          <Image
            style={styles.icon}
            resizeMode={'contain'}
            source={require('../../assets/img/search.png')}
          />
          <TextInput
            style={styles.inputIcon}
            placeholder={"Cari nama, bank, atau nominal"}
            value={search}
            onChangeText={(value) => {
              searching(value)
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => setSortModal(true)}
          style={styles.wrapSort}>
          <Text style={styles.textSort}>Urutkan</Text>
          <Image
            style={styles.sortIcon}
            resizeMode={'contain'}
            source={require('../../assets/img/arrow_down.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const searching = (value) => {
    setSearch(value);
    if (value.length >= 3 && data.length > 0) {
      let regex = new RegExp(value.toLowerCase(), 'i');
      let filterData = data.filter((i) => {
        return regex.test(i.sender_bank) || regex.test(i.benificiary_bank) || regex.test(i.amount) || regex.test(i.beneficiary_name)
      })
      setData(filterData);
      console.log("searching ...", filterData)
    }

    if (value == '') {
      console.log("fetch again");
      fetchData()
    }
  }

  const renderSortModal = () => {
    const filterList = [
      {
        id: 0,
        filter: 'Urutkan'
      },
      {
        id: 1,
        filter: 'Nama A-Z'
      },
      {
        id: 2,
        filter: 'Nama Z-A'
      },
      {
        id: 3,
        filter: 'Tanggal Terbaru'
      },
      {
        id: 4,
        filter: 'Tanggal Terlama'
      },
    ]
    return (
      <Modal
        transparent={true}
        visible={sortModal}
        onRequestClose={() => setSortModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setSortModal(false)}>
          <View
            style={styles.modalSuccess}
          >
            <View
              style={styles.modalInner}
            >
              {
                filterList.map((item, index) => {
                  return (
                    <View key={"filter_" + item.id}
                      style={styles.radioWrap}
                    >
                      <RadioButton
                        selected={selectedSort == item.id}
                        onPress={() => setSelectedSort(item.id)}
                      />
                      <Text style={styles.radioText}>{item.filter}</Text>
                    </View>
                  )
                })
              }
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  const renderDataList = () => {
    return (
      <View style={styles.dataContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          onRefresh={() => {
            setIsLoading(true);
            fetchData;
          }}
          refreshing={isLoading}
          data={data}
          contentContainerStyle={{ paddingBottom: 100 }}
          keyExtractor={(item, index) => 'list transaction' + item.id + '_' + index}
          renderItem={({ item, index }) => {
            const parse = dateParse(item.created_at);
            const splitDate = parse.toLocaleDateString().split('/');
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('TransactionDetail', { detail: item })}
                key={'itemContent' + index}
                style={styles.card}>
                <View style={styles.contentCard}>
                  <View style={[styles.indicatorCard, { backgroundColor: item.status == 'SUCCESS' ? GREEN_COLOR : RED }]} />
                  <View style={styles.infoCard}>
                    <View style={styles.titleCard}>
                      <Text style={styles.textTitle}>{item.sender_bank.toUpperCase()}</Text>
                      <Image
                        style={styles.sortIcon}
                        resizeMode={'contain'}
                        source={require('../../assets/img/right-arrow.png')}
                      />
                      <Text style={styles.textTitle}>{item.beneficiary_bank.toUpperCase()}</Text>
                    </View>
                    <Text>{item.beneficiary_name.toUpperCase()}</Text>
                    <View style={styles.amountInfo}>
                      <Text>Rp. {item.amount}</Text>
                      <View style={styles.dot} />
                      <Text>{splitDate[1] + ' ' + month[parseInt(splitDate[0])] + ' ' + splitDate[2]}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={[styles.buttonCard, item.status == 'SUCCESS' ? { backgroundColor: GREEN_COLOR, marginRight: 16 } : { backgroundColor: WHITE_COLOR, borderColor: RED, borderWidth: 1, marginRight: 15 }]}
                >
                  <Text style={[styles.buttonText, item.status == 'SUCCESS' ? { color: WHITE_COLOR } : { color: BLACK_COLOR }]}>{item.status == 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}</Text>
                </TouchableOpacity>
              </TouchableOpacity>)
          }}
          onEndReachedThreshold={0.1}
          onEndReached={(e) => {
            if (e.distanceFromEnd > 0) {
              fetchData;
            }
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerCenter}>
        {renderSearchbar()}
        {renderDataList()}
      </View>
      {renderSortModal()}
    </SafeAreaView>
  );
};

export default Transaction;
