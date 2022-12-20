import React from 'react';
import Book from '../../../pages';
import { render } from '@testing-library/react';

describe('Book', () => {
  it('renders book form', () => {
    render(<Book />);
  });
});
