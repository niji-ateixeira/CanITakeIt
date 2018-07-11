import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import {
  Home, Notice, Legal, Research,
} from '../views/containers';

const RouterContext = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} init title="Home" />
      <Scene key="notice" component={Notice} title="Notice" />
      <Scene key="legal" component={Legal} title="Legal" />
      <Scene key="research" component={Research} title="Research" />
    </Stack>
  </Router>
);

export default RouterContext;
