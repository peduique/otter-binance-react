import React from "react";

import { getFormattedNumber } from "../../utils/numberFormatHelper";

import { SOrder, SPriceCell, SCell } from "./styles";

interface IOrder {
  order: Array<number>;
  variant?: string;
}

const Order: React.FC<IOrder> = ({ order, variant }) => {
  const [price, amount] = order;
  const total = price * amount;

  return (
    <SOrder data-testid="order">
      <SPriceCell $variant={variant} data-testid="price">
        {getFormattedNumber(price)}
      </SPriceCell>
      <SCell data-testid="amount">{amount.toFixed(5)}</SCell>
      <SCell data-testid="total">{total.toFixed(5)}</SCell>
    </SOrder>
  );
};

export default Order;
