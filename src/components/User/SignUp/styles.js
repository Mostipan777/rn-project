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
  bottomText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: colors.darkGray,
    marginTop: 32,
  },
  userNameBackground: {
    shadowOpacity: 0.1,
    shadowRadius: 22,
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 0},
    position: 'absolute',
    bottom: -17,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 36,
    borderRadius: 10,
  },
  userName: {
    fontSize: 14,
    fontWeight: '900',
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
    marginRight: 12,
  },
});
