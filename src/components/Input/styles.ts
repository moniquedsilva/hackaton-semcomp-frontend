import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  label {
    font-size: 18px;
    color: #1f2937;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  border: 1px solid #9ca3af;
  border-radius: 8px;
  padding: 0px 16px;
  height: 48px;

  &::placeholder {
    color: #9ca3af;
  }
`;
