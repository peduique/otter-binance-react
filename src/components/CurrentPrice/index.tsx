import React, { FC } from "react";
import { IStreamTradePrice } from "../../pages/OrderBook/types";
import { getNumberFormatted } from "../../utils/numberFormatHelper";

import { SWrapper, SCurrentPrice, SPreviousPrice } from "./styles";

type TCurrentPrice = Pick<IStreamTradePrice["data"], "c" | "o">;

const CurrentPrice: FC<TCurrentPrice> = ({ o: open, c: close }) => {
  const handleVariant = () => {
    if (Number(open) < Number(close)) return "negative";
    if (Number(open) > Number(close)) return "positive";
    return "neutral";
  };

  return (
    <SWrapper>
      <SCurrentPrice $variant={handleVariant()}>
        {getNumberFormatted(close)}
      </SCurrentPrice>
      <SPreviousPrice>
        {getNumberFormatted(open, { style: "currency", currency: "USD" })}
      </SPreviousPrice>
    </SWrapper>
  );
};

export default CurrentPrice;
