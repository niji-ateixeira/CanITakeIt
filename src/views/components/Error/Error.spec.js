import React from 'react';
import renderer from 'react-test-renderer';
import Error from './Error';


test('renders correctly', () => {
  const tree = renderer.create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
});
