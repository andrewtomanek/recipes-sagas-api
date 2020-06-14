import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  --blue: hsla(240, 100%, 50%, 1);
  --red: hsla(0, 40%, 40%, 1);
  --grey: hsla(360, 0%, 80%, 1);
  --purple: hsla(300, 100%, 50%, 1);
  font-size: calc(1vw + 1vh + 0.5vmin);
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Georgia',monospace;
}

.layout {
    display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0rem;
  margin: 0rem;
}

button {
font-family: 'Georgia',monospace;}


label {
    display: block;
    margin-bottom: .8rem;
    font-size: 20px;
}

input {
    border: 0.2rem solid none;
      margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  color: var(--blue);
  border-bottom: 0.2rem solid lightgrey;

}

input:focus {  
    outline: none;
    border-bottom: 0.2rem solid  var(--blue);
}


input.error {
    border-color: red;
}

button.outline {
    background-color: #eee;
    border: 1px solid #aaa;
    color: #555;
}

button {
    border-style: none;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
     cursor: pointer;
    outline: none;
    -webkit-appearance: none;
}

button:disabled {
    opacity: .5;
    cursor: not-allowed !important;
}


`;

export default GlobalStyle;
