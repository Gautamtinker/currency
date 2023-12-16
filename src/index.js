// index.js or another higher-level component
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CryptoProvider } from "./CryptoContext";

ReactDOM.render(
  <React.StrictMode>
    <CryptoProvider>
      <App />
    </CryptoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
