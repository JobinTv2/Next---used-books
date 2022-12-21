import React from 'react';
import SignUp from '../../../pages/sign-up';
import '@testing-library/jest-dom';
import '../../matchMedi.mock';
import { render, screen } from '@testing-library/react';

describe('SignUp', () => {
  it('renders sign up page', () => {
    render(<SignUp />);
    expect(screen.getByTestId('signup-input-name')).toBeInTheDocument();
    expect(screen.getByTestId('signup-input-email')).toBeInTheDocument();
    expect(screen.getByTestId('signup-input-phone')).toBeInTheDocument();
    expect(screen.getByTestId('signup-input-password')).toBeInTheDocument();
    expect(screen.getByTestId('signup-submit')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-link')).toBeInTheDocument();
  });
});
