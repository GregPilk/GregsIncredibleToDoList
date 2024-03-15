import React from 'react';
import {Text} from 'react-native';

const AboutScreen = ({}) => {
  const [message, setMessage] = React.useState('');

  const apiCall = async () => {
    const response = await fetch(
      'https://corporatebs-generator.sameerkumar.website/',
      {
        method: 'GET',
      },
    );
    const json = await response.json();

    const {phrase} = json;
    setMessage(phrase);
  };
  React.useEffect(() => {
    apiCall().then(() => {});
  }, []);
  return (
    <>
      <Text style={{fontSize: 18}}>Greg's Incredible List</Text>
      <Text style={{fontSize: 16}}>Written By: Greg Pilkington</Text>
      <Text style={{fontSize: 16}}>Date: March 7, 2024</Text>
      <Text style={{fontSize: 16}}> {message}</Text>
    </>
  );
};

export default AboutScreen;
