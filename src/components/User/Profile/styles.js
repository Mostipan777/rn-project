import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 76,
    marginBottom: 86,
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
  },
});
