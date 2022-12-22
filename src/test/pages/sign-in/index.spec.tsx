import React from 'react';
import SignIn from '../../../pages/sign-in';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '../../matchMedi.mock';

describe('Sign-in', () => {
  it('renders sign-in form', () => {
    render(<SignIn />);
    expect(screen.getByTestId('sign-in-head')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-form')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-mail-input')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-password-input')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-form-sign-up-link')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-keep-logged')).toBeInTheDocument();
  });

  it('renders right text content', () => {
    render(<SignIn />);
    expect(screen.getByTestId('sign-in-head-text')).toHaveTextContent(
      `Let's Read at Home`
    );
    expect(screen.getByTestId('sign-in-para')).toHaveTextContent(
      'Explore the collection and shop for books online. You can find your favourite literature, novels, storybooks, and more on offer.'
    );
  });

  it('should have a submit button', () => {
    render(<SignIn />);
    expect(screen.getByTestId('sign-in-form-submit')).toBeInTheDocument();
  });
});
