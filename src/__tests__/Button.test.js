import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom/extend-expect';

const clickHandler = () => { ''; };
const tableRow = document.createElement('tr');
test('if . button is acting like a button', () => {
  const { getByRole, container } = render(<Button name="." handleClick={clickHandler} />, { container: document.body.appendChild(tableRow) });
  const dot = getByRole('button');
  expect(dot).toBeInTheDocument();
  expect(container).toBeTruthy();
});

test('check if buttonnames are rendered correctly', () => {
  const { getByText } = render(<Button name="." handleClick={clickHandler} />, { container: document.body.appendChild(tableRow) });
  const dot = getByText(/./i);
  expect(dot).toBeInTheDocument();
});
