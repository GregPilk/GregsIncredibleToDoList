import React from 'react';
import {Text, StyleSheet} from 'react-native';

const AboutScreen = ({}) => {
  return (
    <>
      <Text style={styles.title}>Greg's Incredible List</Text>
      <Text style={{fontSize: 16}}>Written By: Greg Pilkington</Text>
      <Text style={{fontSize: 16}}>Date: March 7, 2024</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  body: {
    fontSize: 16,
    margin: 20,
  },
});

export default AboutScreen;
