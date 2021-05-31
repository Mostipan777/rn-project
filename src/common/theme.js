import {StyleSheet} from 'react-native';

export const colors = {
  lightPink: '#E8B0B6',
  darkPink: '#CC8389',
  lightGray: '#A3A3A3',
  darkGray: '#8A898E',
};

export const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 24,
    paddingVertical: 22,
  },
  input: {
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(163, 163,163, .24)',
    fontSize: 16,
    height: 40,
  },
  comment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  basicText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#8A898E',
    marginTop: 32,
  },
  link: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#8A898E',
    marginTop: 32,
    textDecorationLine: 'underline',
  },
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
    color: '#8A898E',
    marginTop: 32,
  },
  userNameBackground: {
    shadowOpacity: 0.1,
    shadowRadius: 22,
    shadowColor: '#000000',
    shadowOffset: {height: 0, width: 0},
    position: 'absolute',
    bottom: -17,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 36,
    borderRadius: 10,
  },
  userName: {
    fontSize: 14,
    fontWeight: '900',
  }
});
