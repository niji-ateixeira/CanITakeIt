import React from 'react';
import Notice from './Notice';

import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import store from '../../../store/store';

test('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Notice /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
