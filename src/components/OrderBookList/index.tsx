import React, { FC } from "react";

import Order from "../Order";

// import { Container } from './styles';

interface IOrderBookList {
  orders: any[];
  variant?: string;
}

const OrderBookList: FC<IOrderBookList> = ({ orders, variant }) => {
  return orders.map((order: Array<string>, index: number) => (
    <Order key={index} order={order} variant={variant} />
  ));
};

export default OrderBookList;
