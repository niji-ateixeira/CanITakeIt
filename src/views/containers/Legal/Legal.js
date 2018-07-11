import React from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './LegalStyles';

const Legal = () => (
  <View style={styles.container}>
    <Text>
        Legal!
    </Text>
    <Text>
        Legal.
    </Text>
    <Text>
        Legal.
    </Text>
    <Button
      onPress={Actions.pop}
      title="Learn More"
    />
  </View>
);

export default Legal;
