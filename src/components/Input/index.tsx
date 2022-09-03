import React from 'react';

import * as S from './styles';

type InputProps = {
  placeholder: string;
  label: string;
  value: string;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

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
