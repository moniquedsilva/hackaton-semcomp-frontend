import styled from 'styled-components';

type StyledButtonProps = {
  maxWidth: number;
};

export const Button = styled.button<StyledButtonProps>`
  height: 48px;
  width: 100%;
  background-color: #1e40af;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};

  span {
    font-size: 16px;
    color: white;
  }
`;
