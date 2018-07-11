import React from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

// action
import { Button, Text } from 'react-native-elements';
import logo from '../../../img/logo.png';
// Style
import styles from './HomeStyles';

const Home = () => (
  <View style={styles.container}>
    <Text h4 style={styles.title}>
          Bienvenue sur Notice
    </Text>
    <Image
      source={logo}
      style={{ width: 300, height: 75, marginBottom: 50 }}
    />
    <Button
      onPress={() => Actions.research()}
      backgroundColor="#00b3b3"
      icon={{ name: 'camera' }}
      title="Scanner votre médicament"
    />
  </View>
);

export default Home;
