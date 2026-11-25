import React, { useState, useEffect } from "react";
import { CurrencyContext } from "./currency.context";
import { storage } from "../utils/storage";
import {
  CURRENCY_STORAGE_KEY,
  CURRENCY_RATES,
  setActiveCurrencyCode,
  formatCurrencyWithRate,
} from "../utils/currencyRates";

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrencyState] = useState(() => {
    const saved = storage.get(CURRENCY_STORAGE_KEY, "USD");
    return CURRENCY_RATES[saved] ? saved : "USD";
  });

  useEffect(() => {
    setActiveCurrencyCode(currency);
    storage.set(CURRENCY_STORAGE_KEY, currency);
  }, [currency]);

  // Initial sync
  setActiveCurrencyCode(currency);

  const setCurrency = (newCurrency) => {
    if (CURRENCY_RATES[newCurrency]) {
      setCurrencyState(newCurrency);
      setActiveCurrencyCode(newCurrency);
      storage.set(CURRENCY_STORAGE_KEY, newCurrency);
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencies: Object.values(CURRENCY_RATES),
        currencyMeta: CURRENCY_RATES[currency] || CURRENCY_RATES.USD,
        formatPrice: (amt) => formatCurrencyWithRate(amt, currency),
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
