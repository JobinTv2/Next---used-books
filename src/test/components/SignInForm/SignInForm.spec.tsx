import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Button } from '../../../components/1-atoms/Button';
import '../../matchMedi.mock';

describe('Sign-in form component', () => {
  it('renders sign in form', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <Button
        className="bg-[#5C60F5] w-full"
        type="primary"
        testId="sign-in-form-submit"
        handleSubmit={() => {
          handleSubmit();
        }}
      >
        Sign in
      </Button>
    );
    // const Button = screen.getByTestId('')

    // render(<Button onClick={handleSubmit} />);
    fireEvent.click(getByTestId('sign-in-form-submit'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
