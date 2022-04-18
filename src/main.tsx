import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import mainTheme from "./mainTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={mainTheme}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);
