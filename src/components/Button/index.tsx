import { InputHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = InputHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  maxWidth?: number;
  variant?: 'green' | 'blue';
};

export const Button = ({
  children,
  onClick,
  maxWidth = 395,
  variant = 'blue',
}: ButtonProps): JSX.Element => {
  return (
    <S.Button maxWidth={maxWidth} variant={variant} onClick={onClick}>
      <span>{children}</span>
    </S.Button>
  );
};
