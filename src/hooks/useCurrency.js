import { useContext } from "react";
import { CurrencyContext } from "../context/currency.context";
import { CURRENCY_RATES, formatCurrencyWithRate } from "../utils/currencyRates";

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    return {
      currency: "USD",
      setCurrency: () => {},
      currencies: Object.values(CURRENCY_RATES),
      currencyMeta: CURRENCY_RATES.USD,
      formatPrice: (amt) => formatCurrencyWithRate(amt, "USD"),
    };
  }
  return context;
};
