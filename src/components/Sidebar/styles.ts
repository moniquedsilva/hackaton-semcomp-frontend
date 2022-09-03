import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  width: 240px;

  padding-top: 24px;

  background-color: #f9fafb;

  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 40px;

  h1 {
    font-family: 'Poppins', sans-serif;
    color: #000;
    font-size: 40px;
  }
`;

export const NavContainer = styled.nav`
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const NavItens = styled.ul`
  list-style: none;

  li {
    height: 48px;
  }

  a {
    color: #1f2937;
    display: flex;
    align-items: center;

    column-gap: 16px;
    font-size: 16px;

    img {
      color: black;
    }
  }
`;
