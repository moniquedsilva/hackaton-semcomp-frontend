import styled from 'styled-components';

type StyledButtonProps = {
  maxWidth: number;
};

export const Button = styled.button<StyledButtonProps>`
  width: 100%;
  height: 48px;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};

  background-color: #1e40af;

  border-radius: 8px;

  transition: all ease-in 0.2s;

  &:hover {
    opacity: 0.9;
  }

  span {
    font-size: 16px;
    color: white;
  }
`;
