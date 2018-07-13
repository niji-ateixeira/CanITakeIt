import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './ErrorStyles';

const Error = () => (
  <View style={styles.container}>
    <Text>
Désolé une erreur est survenue :(
    </Text>
  </View>
);

export default Error;
