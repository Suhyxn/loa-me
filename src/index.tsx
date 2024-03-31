import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-size: 1rem;
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    background-color: #4A4A48;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  button { 
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 1rem;
  }

  img {
    vertical-align: middle;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
