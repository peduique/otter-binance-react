import React from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { WSS_BINANCE_URL } from "../../config/constants";
import { processOrders } from "../../utils/processOrders";

import Order from "../Order";

import { SWrapper } from "./styles";

const OrderBook: React.FC = () => {
  const { lastJsonMessage, readyState } = useWebSocket(
    `${WSS_BINANCE_URL}?streams=btcbusd@depth`
  );

  if (readyState !== ReadyState.OPEN || !lastJsonMessage) {
    return <p>Loading...</p>;
  }

  const { asks, bids } = processOrders(lastJsonMessage);

  return (
    <SWrapper>
      {bids.map((order: Array<string>, index: number) => (
        <Order key={index} order={order} />
      ))}

      {asks.map((order: Array<string>, index: number) => (
        <Order key={index} order={order} />
      ))}
    </SWrapper>
  );
};

export default OrderBook;
