import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import store from './src/store/store';

import RouterContext from './src/router';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <RouterContext />
        </Provider>
      </View>
    );
  }
}

export default App;
