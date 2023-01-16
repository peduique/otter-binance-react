import groupBy from "lodash/groupBy";
import map from "lodash/map";

import { IStreamOrderBook } from "./types";

export const getOrdersByDecimal = (
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
  data: IStreamOrderBook["data"],
  decimal: number
) => {
  const { asks, bids } = data;

  const asksFormatted = getOrdersByDecimal(asks, decimal);
  const bidsFormatted = getOrdersByDecimal(bids, decimal);

  return { asks: asksFormatted, bids: bidsFormatted };
};
