import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import styles from './LoaderStyles';

const Loader = () => (
  <View style={styles.container}>

    <ActivityIndicator size="large" color="#00b3b3" />
    <Text>
Chargement en cours...
    </Text>
  </View>
);

export default Loader;
