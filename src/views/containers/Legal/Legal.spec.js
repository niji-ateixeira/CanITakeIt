import React from 'react';
import Legal from './Legal';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Legal />).toJSON();
  expect(tree).toMatchSnapshot();
});
