import React, { FC } from "react";

import Order from "../Order";
import OrderBookListHeader from "./Header";

import { SOrderBookList } from "./styles";

interface IOrderBookList {
  orders: number[][];
  variant?: string;
}

const OrderBookList: FC<IOrderBookList> = ({ orders, variant }) => {
  return (
    <SOrderBookList>
      {variant === "asks" && <OrderBookListHeader />}
      {orders.map((order: Array<number>, index: number) => (
        <Order key={index} order={order} variant={variant} />
      ))}
    </SOrderBookList>
  );
};

export default OrderBookList;
