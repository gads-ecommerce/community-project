import React from 'react';
import { render } from '@testing-library/react';
import Products from './components/Products';

test('renders learn react link', () => {
  const { getByText } = render(<Products />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
