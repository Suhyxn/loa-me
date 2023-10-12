import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { QueryClient, QueryClientProvider } from "react-query";

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
    boder: none;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    :focus {
      outline: none;
    }
  }
`;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
