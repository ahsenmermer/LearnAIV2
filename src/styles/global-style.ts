import {StyleSheet} from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding:24
  },
});

export default globalStyles;
