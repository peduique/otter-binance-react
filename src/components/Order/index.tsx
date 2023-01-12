import React from "react";

import Cell from "../Cell";

import { getNumberFormatted } from "../../utils/numberFormatHelper";

import { SOrder, SPriceCell } from "./styles";

interface IOrder {
  order: Array<string>;
  variant?: string;
}

const Order: React.FC<IOrder> = ({ order, variant }) => {
  const [price, amount] = order;
  const total = Number(price) * Number(amount);
  const formattedPrice = getNumberFormatted(Number(price));

  return (
    <SOrder>
      <SPriceCell $variant={variant}>{formattedPrice}</SPriceCell>
      <Cell>{amount}</Cell>
      <Cell>{total}</Cell>
    </SOrder>
  );
};

export default Order;
