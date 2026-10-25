import { CurrencyCode, CURRENCIES } from '../types/travel';

export function formatPrice(lkrAmount: number, currency: CurrencyCode): string {
  const config = CURRENCIES[currency];
  const converted = lkrAmount * config.rateToLkr;

  if (currency === 'LKR') {
    return `${config.symbol} ${Math.round(converted).toLocaleString()}`;
  }

  // Rounded to whole dollars/euros/pounds for clean luxury look
  return `${config.symbol}${Math.round(converted).toLocaleString()}`;
}
