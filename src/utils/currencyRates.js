export const CURRENCY_STORAGE_KEY = "roiser_currency";

export const CURRENCY_RATES = {
  USD: { code: "USD", symbol: "$", rate: 1.0, locale: "en-US", name: "USD ($)" },
  EUR: { code: "EUR", symbol: "€", rate: 0.92, locale: "de-DE", name: "EUR (€)" },
  GBP: { code: "GBP", symbol: "£", rate: 0.79, locale: "en-GB", name: "GBP (£)" },
  CAD: { code: "CAD", symbol: "CA$", rate: 1.36, locale: "en-CA", name: "CAD (CA$)" },
  BDT: { code: "BDT", symbol: "৳", rate: 119.5, locale: "bn-BD", name: "BDT (৳)" },
};

let activeCurrency = "USD";

export const setActiveCurrencyCode = (code) => {
  if (CURRENCY_RATES[code]) {
    activeCurrency = code;
  }
};

export const getActiveCurrencyCode = () => activeCurrency;

export const formatCurrencyWithRate = (amount, customCurrency) => {
  const targetCode = customCurrency || activeCurrency || "USD";
  const curr = CURRENCY_RATES[targetCode] || CURRENCY_RATES.USD;
  const numericAmount = typeof amount === "number" ? amount : parseFloat(amount) || 0;
  const convertedAmount = numericAmount * curr.rate;

  return new Intl.NumberFormat(curr.locale, {
    style: "currency",
    currency: curr.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertedAmount);
};
