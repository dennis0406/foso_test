import {Dimensions, Platform, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

const {width} = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'red',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  tabbarContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.25,
    gap: 5,
  },
  tabbarContainer: {
    height: isAndroid ? 74 : 94,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbarLabel: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  activeTabbar: {
    color: COLORS.blue300,
  },
  inactiveTabbar: {
    color: COLORS.gray,
  },
});
