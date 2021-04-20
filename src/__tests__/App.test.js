import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom/extend-expect';

describe('Component', () => {
  test('should render AC button', () => {
    const { getByText } = render(<App />);
    const link = getByText(/AC/i);
    expect(link).toBeInTheDocument();
  });

  test('should render X button', () => {
    const { getByText } = render(<App />);
    const link = getByText(/X/i);
    expect(link).toBeInTheDocument();
  });

  test('should render % button', () => {
    const { getByText } = render(<App />);
    const link = getByText(/%/i);
    expect(link).toBeInTheDocument();
  });

  test('should render = button', () => {
    const { getByText } = render(<App />);
    const link = getByText(/=/i);
    expect(link).toBeInTheDocument();
  });

  test('should render ÷ button', () => {
    const { getByText } = render(<App />);
    const link = getByText(/÷/i);
    expect(link).toBeInTheDocument();
  });
});
