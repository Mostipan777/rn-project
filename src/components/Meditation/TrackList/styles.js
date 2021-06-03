import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    width: 327,
    height: 88,
    padding: 20,
    marginLeft: 24,
    marginVertical: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.14,
    shadowRadius: 20,
    shadowColor: '#272727',
    shadowOffset: {height: 0, width: 0},
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 3
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 7,
    marginRight: 15
  },
});
