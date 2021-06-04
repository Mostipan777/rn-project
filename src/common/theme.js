import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const colors = {
  lightPink: '#E8B0B6',
  pink: '#D49499',
  darkPink: '#CC8389',
  lightGray: '#A3A3A3',
  gray: '#C2C2C2',
  darkGray: '#8A898E',
};

export const fonts = {
  playerTitle:  RFValue(24),
  playerSubtitle:  RFValue(14),
};

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     marginTop: 128,
//     marginBottom: 115,
//   },
//   pageTitle: {
//     textAlign: 'center',
//     fontSize: 22,
//     fontWeight: '500',
//   },
//   bottomText: {
//     textAlign: 'center',
//     fontSize: 14,
//     fontWeight: '500',
//     color: colors.darkGray,
//     marginTop: 32,
//   },
//   userNameBackground: {
//     shadowOpacity: 0.1,
//     shadowRadius: 22,
//     shadowColor: 'black',
//     shadowOffset: {height: 0, width: 0},
//     position: 'absolute',
//     bottom: -17,
//     backgroundColor: 'white',
//     paddingVertical: 8,
//     paddingHorizontal: 36,
//     borderRadius: 10,
//   },
//   userName: {
//     fontSize: 14,
//     fontWeight: '900',
//   },
//   inputContainer: {
//     opacity: 0.75,
//     flexDirection: 'row',
//     marginHorizontal: 24,
//     marginVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: colors.lightGray,
//     height: 40,
//     alignItems: 'center',
//   },
//   inputIcon: {
//     marginRight: 12,
//   },
// });
