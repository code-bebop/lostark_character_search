import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import mainTheme from "./mainTheme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <React.StrictMode>
          <Router />
        </React.StrictMode>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
