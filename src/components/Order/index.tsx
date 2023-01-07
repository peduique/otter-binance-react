import React from "react";

interface IOrder {
  order: Array<string>;
}
import Cell from "../Cell";
import { SOrder } from "./styles";

const Order: React.FC<IOrder> = ({ order }) => {
  const [price, amount] = order;
  const total = Number(price) * Number(amount);

  return (
    <SOrder>
      <Cell>{price}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{total}</Cell>
    </SOrder>
  );
};

export default Order;
