import styled, { css } from 'styled-components';

type StyledButtonProps = {
  maxWidth: number;
  variant?: 'green' | 'blue';
};

export const Button = styled.button<StyledButtonProps>`
  width: 100%;
  height: 48px;

  border-radius: 8px;

  transition: all ease-in 0.2s;

  &:hover {
    opacity: 0.9;
  }

  ${({ variant, maxWidth }) => css`
    max-width: ${`${maxWidth}px`};
    background-color: ${variant === 'green' ? '#10B981' : '#1E40AF'};
  `};

  span {
    font-size: 16px;
    color: white;
  }
`;
