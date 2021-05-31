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
});