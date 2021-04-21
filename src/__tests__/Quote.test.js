import React from 'react';
import { render } from '@testing-library/react';

import Quote from '../components/Quote';
import '@testing-library/jest-dom/extend-expect';

describe('Quote has ', () => {
  it('Quote by Math Magician', () => {
    const { getByText } = render(<Quote />);
    const text = getByText('Math Magician');
    expect(text).toBeInTheDocument();
  });
  it('same content with the snapshot', () => {
    const { getByText } = render(<Quote />);
    const text = getByText('Math Magician');
    expect(text).toMatchSnapshot();
  });
});
