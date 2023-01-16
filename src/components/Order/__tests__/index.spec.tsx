import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Order from "..";
import { getFormattedNumber } from "../../../utils/numberFormatHelper";

const order = [21108.81, 0.05];
const [price, amount] = order;
const total = price * amount;

describe("Order", () => {
  it("should show current trade price", () => {
    const { getByTestId } = render(<Order order={order} variant="asks" />);

    expect(getByTestId("price")).toHaveTextContent(getFormattedNumber(price));
    expect(getByTestId("amount")).toHaveTextContent(amount.toFixed(5));
    expect(getByTestId("total")).toHaveTextContent(total.toFixed(5));
  });
});
