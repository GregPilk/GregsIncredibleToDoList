import React from 'react';
import {Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({}) => {
  return (
    <MainLayout>
      <>
        <Text>Greg's Incredible To Do List App</Text>
        <Text>written by: Greg Pilkington</Text>
        <Text>Version: 1.0</Text>
      </>
    </MainLayout>
  );
};

export default AboutScreen;
