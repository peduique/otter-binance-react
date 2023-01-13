export const getNumberFormatted = (
  value: number | string,
  params: Intl.NumberFormatOptions = {}
): string =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    ...params,
  }).format(Number(value));
