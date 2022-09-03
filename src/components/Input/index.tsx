import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({
  placeholder,
  label,
  value,
  name,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <S.Container>
      <label>{label}</label>
      <S.Input
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </S.Container>
  );
};
