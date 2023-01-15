import React, { FC } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import OrderBookList from "../../components/OrderBookList";
import Select from "../../components/Select";
import Loading from "../../components/Loading";
import CurrentPrice from "../../components/CurrentPrice";

import { WSS_BINANCE_URL } from "../../config/constants";

import { ORDER_BOOK_DECIMALS } from "./constants";
import { TWSData } from "./types";
import {
  SContainer,
  SOrderBookWrapper,
  SHeader,
  STitle,
  SCoinTitle,
} from "./styles";

const OrderBookPage: FC = () => {
  const { lastJsonMessage: orderBook, readyState: orderBookStatus } =
    useWebSocket<TWSData>(`${WSS_BINANCE_URL}?streams=btcbusd@depth20`, {
      shouldReconnect: () => true,
    });
  const { lastJsonMessage: trade, readyState: tradeStatus } =
    useWebSocket<TWSData>(`${WSS_BINANCE_URL}?streams=btcbusd@miniTicker`, {
      shouldReconnect: () => true,
    });

  const wsIsConnected =
    [orderBookStatus, tradeStatus].includes(ReadyState.OPEN) &&
    orderBook &&
    trade;

  if (!wsIsConnected) {
    return (
      <SContainer>
        <STitle>Order Book</STitle>
        <Loading text="loading order book..." />
      </SContainer>
    );
  }

  return (
    <SContainer>
      <STitle>Order Book</STitle>

      <SHeader>
        <SCoinTitle>{trade?.data?.s}</SCoinTitle>
        <Select
          label="Decimals"
          options={ORDER_BOOK_DECIMALS}
          name="decimals"
          onChange={(name, value) => console.log(name, value)}
        />
      </SHeader>

      <SOrderBookWrapper>
        <OrderBookList
          orders={orderBook?.data?.asks.reverse()}
          variant="asks"
        />
        <CurrentPrice {...trade?.data} />
        <OrderBookList orders={orderBook?.data?.bids} />
      </SOrderBookWrapper>
    </SContainer>
  );
};

export default OrderBookPage;
