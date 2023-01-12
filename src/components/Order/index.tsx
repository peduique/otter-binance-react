import React from "react";

import Cell from "../Cell";

import { SOrder, SPriceCell } from "./styles";

interface IOrder {
  order: Array<string>;
  variant: string;
}

const Order: React.FC<IOrder> = ({ order, variant }) => {
  const [price, amount] = order;
  const total = Number(price) * Number(amount);

  return (
    <SOrder>
      <SPriceCell $variant={variant}>{price}</SPriceCell>
      <Cell>{amount}</Cell>
      <Cell>{total}</Cell>
    </SOrder>
  );
};

export default Order;
