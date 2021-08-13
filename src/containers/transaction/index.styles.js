import { StyleSheet, Dimensions } from 'react-native';
import { RED, WHITE_COLOR, BLACK_COLOR, WINDOW_WIDTH, BACKGROUND_COLOR, GREEN_COLOR } from '../../styles';

const { width, height } = Dimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  logo: {
    marginVertical: 48,
  },
  containerCenter: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    flex: 1,
    width,
    height,
    backgroundColor: BACKGROUND_COLOR,
  },
  wrapInputIcon: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  inputIcon: {
    height: 50,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 15
  },
  icon: {
    height: 30,
    width: 30,
    paddingVertical: 24
  },
  searchbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: WHITE_COLOR,
    margin: 10,
    borderRadius: 20,
    maxHeight: 60,
    paddingVertical: 6,
    width: WINDOW_WIDTH * 0.95
  },
  wrapSort: {
    flexDirection: 'row',
  },
  sortIcon: {
    height: 30,
    width: 30,
    paddingVertical: 24
  },
  textSort: {
    color: RED,
    fontWeight: 'bold',
    padding: 6,
    fontSize: 15,
    paddingVertical: 12
  },
  card: {
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 380,
    height: 150,
    margin: 5,
    borderRadius: 20
  },
  contentCard: {
    flexDirection: 'row',
  },
  infoCard: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 8
  },
  indicatorCard: {
    width: 10,
    height: 150,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  titleCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    padding: 3,
  },
  buttonCard: {
    padding: 8,
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    fontWeight: 'bold'
  },
  amountInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: BLACK_COLOR,
    margin: 8
  },
  modalSuccess: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInner: {
    height: 300,
    width: 280,
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20
  },
  modalFooter: {
    paddingHorizontal: 14,
    width: 280
  },
  checkmarkImage: {
    height: 100,
    width: 100,
    margin: 18,
    marginTop: 30
  },
  textSuccess: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  text1: {
    padding: 8
  },
  radioWrap: {
    flexDirection: 'row'
  },
  radioText: {
    paddingLeft: 8
  }
});

export default styles;
