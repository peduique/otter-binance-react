import groupBy from "lodash/groupBy";
import map from "lodash/map";

import { IStreamOrderBook } from "./types";

const formatOrdersByDecimal = (
  orders: string[][],
  decimal: number
): number[][] => {
  return map(
    groupBy(orders, ([price]) => {
      return Math.floor(Number(price) / decimal) * decimal;
    }),
    (item, groupedOrder) => {
      const sum = item.reduce((acc, [_, amount]) => {
        return (acc += Number(amount));
      }, 0);

      return [Number(groupedOrder), sum];
    }
  );
};

export const getFormattedOrders = (
  { asks, bids }: IStreamOrderBook["data"],
  decimal: number
) => {
  const asksFormatted = formatOrdersByDecimal(asks, decimal);
  const bidsFormatted = formatOrdersByDecimal(bids, decimal);

  return { asks: asksFormatted, bids: bidsFormatted };
};
