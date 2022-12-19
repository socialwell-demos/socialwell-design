import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import "react-quill/dist/quill.snow.css";

export const GlobalStyles = createGlobalStyle`
${normalize()}

html{
    font-size: 16px;
    box-sizing: border-box;
}

*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
h1{
  margin: 0;
}

body {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  place-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
}

`;
