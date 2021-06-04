import {StyleSheet} from 'react-native';
import {colors} from '../../../common/theme';

export const styles = StyleSheet.create({
  item: {
    marginLeft: 24,
    width: 327,
    padding: 15,
    marginVertical: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.14,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 3,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 7,
    marginRight: 15,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.darkGray,
  },
  duration: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.gray,
  },
});
