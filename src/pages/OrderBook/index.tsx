import React, { FC } from "react";

import OrderBookList from "../../components/OrderBookList";
import Select from "../../components/Select";

import { WSS_BINANCE_URL } from "../../config/constants";
import useWebSocket from "../../hooks/useWebsocket";
import { getNumberFormatted } from "../../utils/numberFormatHelper";
import { ORDER_BOOK_DECIMALS } from "./constants";
import { IStreamOrderBook, IStreamTradePrice } from "./types";

import {
  SContainer,
  SOrderBookWrapper,
  SHeader,
  STitle,
  SCoinTitle,
  SCurrentPrice,
} from "./styles";
import Loading from "../../components/Loading";

const symbols = ["btcbusd"];

const OrderBookPage: FC = () => {
  const { data: orderBook } = useWebSocket<IStreamOrderBook>(
    `${WSS_BINANCE_URL}?streams=${symbols.at(0)}@depth20`
  );

  const { data: trade } = useWebSocket<IStreamTradePrice>(
    `${WSS_BINANCE_URL}?streams=${symbols.at(0)}@trade`
  );

  if (!orderBook?.data?.lastUpdateId || !trade?.data?.p) {
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
        <SCoinTitle>{trade.data.s}</SCoinTitle>
        <Select
          label="Decimals"
          options={ORDER_BOOK_DECIMALS}
          name="decimals"
          onChange={(name, value) => console.log(name, value)}
        />
      </SHeader>

      <SOrderBookWrapper>
        <OrderBookList orders={orderBook.data.asks} variant="asks" />
        <SCurrentPrice>{getNumberFormatted(trade.data.p)}</SCurrentPrice>
        <OrderBookList orders={orderBook.data.bids} />
      </SOrderBookWrapper>
    </SContainer>
  );
};

export default OrderBookPage;
