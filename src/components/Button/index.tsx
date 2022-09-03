import { InputHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = InputHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  maxWidth?: number;
};

export const Button = ({
  children,
  onClick,
  maxWidth = 395,
}: ButtonProps): JSX.Element => {
  return (
    <S.Button maxWidth={maxWidth} onClick={onClick}>
      <span>{children}</span>
    </S.Button>
  );
};
