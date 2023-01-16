import React from "react";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import OrderBookList from "..";

import { getFormattedNumber } from "../../../utils/numberFormatHelper";
import orders from "./mock.json";

describe("OrderBookList", () => {
  it("should successfully load orders", () => {
    const { getByTestId } = render(<OrderBookList orders={orders} />);

    const orderBook = getByTestId("order-book-list");

    expect(within(orderBook).getAllByTestId("order")).toHaveLength(20);
  });

  it("should load header when passing asks as variant", () => {
    const { getByTestId } = render(
      <OrderBookList orders={orders} variant="asks" />
    );

    expect(getByTestId("order-book-header")).toBeVisible();
  });
});
