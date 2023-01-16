import React, { FC, memo } from "react";

import { IStreamTradePrice } from "../../pages/OrderBook/types";
import { getFormattedNumber } from "../../utils/numberFormatHelper";
import { getVariant } from "./helper";
import { SWrapper, SCurrentPrice, SPreviousPrice, SArrowIcon } from "./styles";

type TCurrentPrice = Pick<IStreamTradePrice["data"], "c" | "o">;

const CurrentPrice: FC<TCurrentPrice> = ({ o, c }) => {
  const openPrice = Number(o);
  const closePrice = Number(c);

  return (
    <SWrapper>
      <SCurrentPrice $variant={getVariant(openPrice, closePrice)}>
        {getFormattedNumber(closePrice)}
        <SArrowIcon />
      </SCurrentPrice>
      <SPreviousPrice>
        {getFormattedNumber(openPrice, { style: "currency", currency: "USD" })}
      </SPreviousPrice>
    </SWrapper>
  );
};

export default memo(CurrentPrice);
