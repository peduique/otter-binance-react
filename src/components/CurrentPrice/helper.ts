export function getVariant(openPrice: number, closePrice: number): string {
  if (closePrice > openPrice) return "positive";
  if (closePrice < openPrice) return "negative";
  return "neutral";
}
