import React from 'react';
import { render } from '@testing-library/react';

import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home has ', () => {
  it('should have Math Magician when page loads', () => {
    const { getByText } = render(<Home />);
    const title = getByText('Math Magician');
    expect(title).toBeInTheDocument();
  });
  it('same content with the snapshot', () => {
    const { getByText } = render(<Home />);
    const title = getByText('Math Magician');
    expect(title).toMatchSnapshot();
  });
});
