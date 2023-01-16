import React from "react";

import { SOrder, SHeaderCell } from "../../Order/styles";

const OrderBookListHeader: React.FC = () => {
  return (
    <SOrder data-testid="order-book-header">
      <SHeaderCell>Price</SHeaderCell>
      <SHeaderCell $alignRight>Amount</SHeaderCell>
      <SHeaderCell $alignRight>Total</SHeaderCell>
    </SOrder>
  );
};

export default OrderBookListHeader;
