import React, { ReactNode } from 'react';
import { Button as Btn } from 'antd';
import { ButtonType } from 'antd/lib/button';

interface Props {
  handleSubmit: () => void;
  className: string;
  type: ButtonType;
  testId: string;
  children: ReactNode;
}

export const Button: (rposp: Props) => JSX.Element = (props) => {
  const { handleSubmit, className, type, testId, children } = props;
  return (
    <Btn
      className={className}
      type={type}
      data-testid={testId}
      onClick={() => {
        handleSubmit();
      }}
    >
      {children}
    </Btn>
  );
};

export default Button;
