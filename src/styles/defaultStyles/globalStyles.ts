import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  button {
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
