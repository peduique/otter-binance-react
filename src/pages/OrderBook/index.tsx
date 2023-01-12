import React from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import OrderBookList from "../../components/OrderBookList";
import Select from "../../components/Select";

import { WSS_BINANCE_URL } from "../../config/constants";
import { processOrders } from "../../utils/processOrdersHelper";
import { ORDER_BOOK_DECIMALS } from "./constants";

import { SContainer, SOrderBookWrapper, SHeader, STitle } from "./styles";

const OrderBookPage: React.FC = () => {
  const { lastJsonMessage, readyState } = useWebSocket(
    `${WSS_BINANCE_URL}?streams=btcbusd@depth`,
    {
      shouldReconnect: () => true,
    }
  );

  if (readyState !== ReadyState.OPEN || !lastJsonMessage) {
    return <p>Loading...</p>;
  }

  const { asks, bids } = processOrders(lastJsonMessage);

  return (
    <SContainer>
      <SHeader>
        <STitle>
          Order Book - <strong>BTCBUSD</strong>
        </STitle>
        <Select
          label="Decimals"
          options={ORDER_BOOK_DECIMALS}
          name="decimals"
          onChange={(name, value) => console.log(name, value)}
        />
      </SHeader>

      <SOrderBookWrapper>
        <OrderBookList orders={bids} />
        <OrderBookList orders={asks} variant="asks" />
      </SOrderBookWrapper>
    </SContainer>
  );
};

export default OrderBookPage;
