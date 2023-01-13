import React from "react";

import Cell from "../../Cell";

import { SOrder, SHeaderCell } from "../../Order/styles";

const OrderBookListHeader: React.FC = () => {
  return (
    <SOrder>
      <SHeaderCell>Price</SHeaderCell>
      <SHeaderCell>Amount</SHeaderCell>
      <SHeaderCell>Total</SHeaderCell>
    </SOrder>
  );
};

export default OrderBookListHeader;
