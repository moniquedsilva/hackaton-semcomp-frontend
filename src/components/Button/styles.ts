import styled from 'styled-components';

type StyledButtonProps = {
  maxWidth: number;
};

export const Button = styled.button<StyledButtonProps>`
  height: 48px;
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
`;
