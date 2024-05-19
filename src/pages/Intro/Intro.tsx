import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles';
import {LOGO} from '../../assets';
import styles from './Intro.style';

const Intro = () => {
  return (
    <View style={globalStyles.container}>
      <Image source={LOGO} />
      <Text style={styles.title}>Learn AI</Text>
      <Text style={styles.subTitle}>
        learn languages with our COOL penguin friends
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Intro;
