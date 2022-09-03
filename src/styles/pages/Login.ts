import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BasicContainer = styled.div`
  width: 100%;

  &:nth-child(1) {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background: #60a5fa;
  border-radius: 0px 0px 5000px 0px;
`;
