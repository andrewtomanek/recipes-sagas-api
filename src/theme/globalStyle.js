import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  --blue: hsla(210, 50%, 60%, 1);
  --red: hsla(0, 40%, 40%, 1);
  --grey: hsla(360, 0%, 80%, 1);
  --azure: hsla(170, 50%, 60%, 1);
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
  background-color: hsla(210, 90%, 90%, 1);
  margin: 0;
  padding: 0;
  font-family: 'Georgia',monospace;
}

button {
font-family: 'Georgia',monospace;}


label {
    display: block;
    margin-bottom: .8rem;
    font-size: 20px;
}

input {
    padding: .5rem;
    font-size: 16px;
    width: 300px;
    margin: 0 auto;
    display: block;
    border-radius: 4px;
    border: 1px solid #eeeeee;
}

input:focus {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
}

.input-feedback {
    color: red;
    margin-top: .25rem;
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
    max-width: 150px;
    margin: 20px 0;
    padding: 10px 20px;
    border-style: none;
    border-radius: 5px;
    background-color: #08c;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
}

button:disabled {
    opacity: .5;
    cursor: not-allowed !important;
}

button + button {
    margin-left: 1rem;
}

.output {
    font-size: 18px;
    padding: 0 60px;
}

`;

export default GlobalStyle;
