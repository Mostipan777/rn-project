import {StyleSheet} from 'react-native';
import {colors} from '../../../common/theme';

export const styles = StyleSheet.create({
  container: {
    height: '75%',
  },
  progressBar: {
    alignItems: 'center',
    marginBottom: 70,
  },
  backgroundImage: {
    height: '102%',
    justifyContent: 'space-between',
  },
  topText: {
    marginTop: 70,
    marginLeft: 20,
  },
  date: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.gray,
  },
  libraryTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
  },
  anchor: {
    marginBottom: 80,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
  },
});
