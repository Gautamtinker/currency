// CryptoContext.js
import React, { createContext, useState, useContext } from "react";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("र");

  const contextValues = {
    currency,
    symbol,
    setCurrency,
    setSymbol,
  };

  return (
    <CryptoContext.Provider value={contextValues}>
      {children}
    </CryptoContext.Provider>
  );
};

const useCrypto = () => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  return context;
};

export { CryptoProvider, useCrypto };
