import { StyleSheet, Dimensions } from 'react-native';
import { SOFTGRAY2_COLOR, RED, WHITE_COLOR, BLACK_COLOR, WINDOW_WIDTH, BACKGROUND_COLOR, GRAY_COLOR, WINDOW_HEIGHT } from '../../styles';

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
    marginTop: 20,
    alignItems: 'center',
  },
  contentDetail: {
    backgroundColor: WHITE_COLOR,
    width: WINDOW_WIDTH
  },
  iconCopy: {
    width: 30,
    height: 30,
    marginLeft: 8,
  },
  idTransaction: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: SOFTGRAY2_COLOR,
    paddingLeft: 30,
    padding: 30
  },
  detailTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: GRAY_COLOR,
    borderBottomWidth: 1,
    paddingLeft: 30,
    padding: 30
  },
  titleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    padding: 30
  },
  textTitle: {
    fontWeight: 'bold',
    padding: 3,
  },
  sortIcon: {
    height: 30,
    width: 30,
    paddingVertical: 24
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingTop: 1,
    padding: 30
  },
  date: {
    paddingLeft: 30,
    paddingTop: 1,
    padding: 30
  },
  textInfo: {
    fontWeight: '900'
  }
});

export default styles;
