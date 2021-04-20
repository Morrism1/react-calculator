import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';
import '@testing-library/jest-dom/extend-expect';

test('Render the display component  correctly', () => {
  const displayTree = renderer.create(<Display />).toJSON();
  expect(displayTree).toMatchSnapshot();
});
