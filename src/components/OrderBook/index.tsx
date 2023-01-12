import React from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { WSS_BINANCE_URL } from "../../config/constants";
import { processOrders } from "../../utils/processOrders";

import Order from "../Order";
import OrderBookList from "../OrderBookList";

import { SWrapper } from "./styles";

const OrderBook: React.FC = () => {
  const { lastJsonMessage, readyState } = useWebSocket(
    `${WSS_BINANCE_URL}?streams=btcbusd@depth`,
    {
      shouldReconnect: (event) => true,
    }
  );

  if (readyState !== ReadyState.OPEN || !lastJsonMessage) {
    return <p>Loading...</p>;
  }

  const { asks, bids } = processOrders(lastJsonMessage);

  return (
    <SWrapper>
      <OrderBookList orders={bids} />
      <OrderBookList orders={asks} variant="asks" />
    </SWrapper>
  );
};

export default OrderBook;
