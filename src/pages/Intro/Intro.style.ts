import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  title: {
    color: colors.text.primary,
    fontSize: 48,
    marginBottom: 18,
  },
  subTitle: {
    color: colors.text.primary,
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.background.secondary,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  buttonText: {
    color: colors.text.tertinary,
    fontSize: 28,
    fontWeight: '500',
    letterSpacing:3
  },
});

export default styles;
