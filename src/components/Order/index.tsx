import React from "react";

import { getNumberFormatted } from "../../utils/numberFormatHelper";

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
      <SPriceCell $variant={variant}>{getNumberFormatted(price)}</SPriceCell>
      <SCell>{amount}</SCell>
      <SCell>{price}</SCell>
    </SOrder>
  );
};

export default Order;
