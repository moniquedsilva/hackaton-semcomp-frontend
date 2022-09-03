import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #fff;
`;

export const Title = styled.h1`
  justify-self: flex-start;
  font-size: 48px;
  font-weight: 500;
  color: #111827;
`;

export const PerfilForm = styled.form`
  width: 1256px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 32px;
  place-items: center;
  .edit_button {
    grid-column-end: span 2;
  }
`;
