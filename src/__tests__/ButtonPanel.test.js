import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';
import '@testing-library/jest-dom/extend-expect';

const clickHandler = () => { ''; };

test('Render the ButtonPannel component  correctly', () => {
  const buttonpanel = renderer.create(<ButtonPanel handleCkick={clickHandler} />).toJSON();
  expect(buttonpanel).toMatchSnapshot();
});
