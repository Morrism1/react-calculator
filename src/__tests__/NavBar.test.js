import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '@testing-library/jest-dom/extend-expect';

describe('The navigation bar should contain', () => {
  it('Link to Home component', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const link = getByText('Home');
    expect(link).toBeInTheDocument();
  });
  it('Link to calculator component', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const link = getByText('Calculator');
    expect(link).toBeInTheDocument();
  });

  it('Link to quote of the day component', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const link = getByText('Quote');
    expect(link).toBeInTheDocument();
  });
});
