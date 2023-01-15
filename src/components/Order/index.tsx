import React from "react";

import { getFormattedNumber } from "../../utils/numberFormatHelper";

import { SOrder, SPriceCell, SCell } from "./styles";

interface IOrder {
  order: Array<string>;
  variant?: string;
}

const Order: React.FC<IOrder> = ({ order, variant }) => {
  const [price, amount] = order;
  const total = Number(price) * Number(amount);

  return (
    <SOrder>
      <SPriceCell $variant={variant}>
        {getFormattedNumber(Number(price))}
      </SPriceCell>
      <SCell>{amount}</SCell>
      <SCell>{total.toFixed(5)}</SCell>
    </SOrder>
  );
};

export default Order;
