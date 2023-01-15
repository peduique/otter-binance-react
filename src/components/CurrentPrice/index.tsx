import React, { FC, memo } from "react";

import { IStreamTradePrice } from "../../pages/OrderBook/types";
import { getFormattedNumber } from "../../utils/numberFormatHelper";
import { SWrapper, SCurrentPrice, SPreviousPrice } from "./styles";

type TCurrentPrice = Pick<IStreamTradePrice["data"], "c" | "o">;

const CurrentPrice: FC<TCurrentPrice> = ({ o, c }) => {
  const openPrice = Number(o);
  const closePrice = Number(c);

  return (
    <SWrapper>
      <SCurrentPrice $variant={getVariant(openPrice, closePrice)}>
        {getFormattedNumber(closePrice)}
      </SCurrentPrice>
      <SPreviousPrice>
        {getFormattedNumber(openPrice, { style: "currency", currency: "USD" })}
      </SPreviousPrice>
    </SWrapper>
  );
};

export default memo(CurrentPrice);

function getVariant(openPrice: number, closePrice: number): string {
  if (openPrice < closePrice) return "negative";
  if (openPrice > closePrice) return "positive";
  return "neutral";
}
