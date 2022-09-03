import styled, { css } from 'styled-components';

import { CardVariant } from '.';

type CardProps = {
  variant: CardVariant;
};

const cardVariants = {
  purple: css`
    background-color: #a78bfa;
  `,
  blue: css`
    background-color: #818cf8;
  `,
  pink: css`
    background-color: #f472b6;
  `,
};

export const Container = styled.div<CardProps>`
  width: 330px;
  height: 290px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);

  ${({ variant }) => cardVariants[variant]}

  & span:nth-child(2) {
    margin-top: 48px;

    font-size: 32px;
    font-weight: 600;
    color: #f9fafb;
  }
`;
