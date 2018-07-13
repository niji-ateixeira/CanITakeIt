import React from 'react';
import renderer from 'react-test-renderer';
import Legal from './Legal';


test('renders correctly', () => {
  const tree = renderer.create(<Legal />).toJSON();
  expect(tree).toMatchSnapshot();
});
