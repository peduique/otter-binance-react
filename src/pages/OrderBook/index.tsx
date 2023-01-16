import React, { FC, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import OrderBookList from "../../components/OrderBookList";
import Select from "../../components/Select";
import Loading from "../../components/Loading";
import CurrentPrice from "../../components/CurrentPrice";

import { WSS_BINANCE_URL } from "../../config/constants";
import { ORDER_BOOK_DECIMALS } from "./constants";
import { getFormattedOrders } from "./helper";
import { TWSData } from "./types";
import {
  SContainer,
  SOrderBookWrapper,
  SHeader,
  STitle,
  SCoinTitle,
} from "./styles";

const OrderBookPage: FC = () => {
  const [decimal, setDecimal] = useState(0.01);

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

  const { asks, bids } = getFormattedOrders(orderBook?.data, decimal);

  return (
    <SContainer>
      <STitle>Order Book</STitle>

      <SHeader>
        <SCoinTitle data-testid="order-book-coin-title">
          {trade?.data?.s}
        </SCoinTitle>
        <Select
          label="Decimals"
          options={ORDER_BOOK_DECIMALS}
          name="decimals"
          onChange={(_, value) => setDecimal(Number(value))}
        />
      </SHeader>

      <SOrderBookWrapper>
        <OrderBookList orders={asks} variant="asks" />
        <CurrentPrice {...trade?.data} />
        <OrderBookList orders={bids} />
      </SOrderBookWrapper>
    </SContainer>
  );
};

export default OrderBookPage;
