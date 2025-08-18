export function formatAmount(cents) {
  const amount = cents / 100;
  return `$${amount.toFixed(2)}`;
}
