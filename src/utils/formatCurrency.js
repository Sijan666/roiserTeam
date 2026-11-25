import { formatCurrencyWithRate } from "./currencyRates";

/**
 * Global reactive currency formatter utility
 * Converts base USD amounts to the currently active global currency.
 * @param {number} amount
 * @param {string} [overrideCurrency]
 * @returns {string}
 */
export const formatCurrency = (amount, overrideCurrency) => {
  return formatCurrencyWithRate(amount, overrideCurrency);
};
