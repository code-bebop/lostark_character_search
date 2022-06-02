import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Router from "./Router";
import "./reset.css";
import "./main.css";
import { ThemeProvider } from "styled-components";
import mainTheme from "./mainTheme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <HashRouter basename={import.meta.env.PUBLIC_URL}>
      <ThemeProvider theme={mainTheme}>
        <React.StrictMode>
          <Router />
        </React.StrictMode>
      </ThemeProvider>
    </HashRouter>
  </QueryClientProvider>
);
