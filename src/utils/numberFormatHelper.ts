export const getFormattedNumber = (
  value: number,
  params: Intl.NumberFormatOptions = {}
): string =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    ...params,
  }).format(value);
