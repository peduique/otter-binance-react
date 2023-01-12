import React from "react";

import Cell from "../../Cell";

import { SOrder } from "../../Order/styles";

const OrderBookListHeader: React.FC = () => {
  return (
    <SOrder>
      <Cell>Price</Cell>
      <Cell>Amount</Cell>
      <Cell>Total</Cell>
    </SOrder>
  );
};

export default OrderBookListHeader;
