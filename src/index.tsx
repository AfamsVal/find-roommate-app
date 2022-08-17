import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    {/* <QueryClientProvider client={queryClient}> */}
    <Routes />
    {/* </QueryClientProvider> */}
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

reportWebVitals();
