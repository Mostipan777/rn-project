import {StyleSheet} from 'react-native';
import {colors} from '../../../common/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 128,
    marginBottom: 115,
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
  },
  inputContainer: {
    opacity: 0.75,
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    height: 40,
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 12
  }
});
