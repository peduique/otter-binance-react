import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { getFormattedNumber } from "../../../utils/numberFormatHelper";
import CurrentPrice from "..";

const openPrice = "21180.86";
const closePrice = "20753.57";

const formattedOpenPrice = getFormattedNumber(Number(openPrice), {
  style: "currency",
  currency: "USD",
});
const formattedClosePrice = getFormattedNumber(Number(closePrice));

describe("CurrentPrice", () => {
  it("should show current trade price", () => {
    const { getByTestId } = render(
      <CurrentPrice o={openPrice} c={closePrice} />
    );

    expect(getByTestId("close-price")).toHaveTextContent(formattedClosePrice);
    expect(getByTestId("open-price")).toHaveTextContent(formattedOpenPrice);
  });
});
