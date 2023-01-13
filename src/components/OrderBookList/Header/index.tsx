import React from "react";

import { SOrder, SHeaderCell } from "../../Order/styles";

const OrderBookListHeader: React.FC = () => {
  return (
    <SOrder>
      <SHeaderCell>Price</SHeaderCell>
      <SHeaderCell $alignRight>Amount</SHeaderCell>
      <SHeaderCell $alignRight>Total</SHeaderCell>
    </SOrder>
  );
};

export default OrderBookListHeader;
