import { getFormattedOrders } from "../helper";
import orders from "./mock.json";

const decimal = 0.01;
const updatedDecimal = 1;

describe("getFormattedOrders helper", () => {
  it("should return a formatted version of orders", () => {
    let result = getFormattedOrders(orders.data, decimal);

    expect(result.asks).toEqual([
      [20865, 0.17958],
      [20864.4, 0.05],
      [20864.41, 0.00288],
      [20864.58, 0.02835],
      [20864.61, 0.001],
      [20864.68, 0.00051],
      [20864.74, 0.05],
      [20864.86, 0.001],
      [20864.91, 0.02759],
      [20864.99, 0.17832],
      [20865.05, 0.00195],
      [20865.31, 0.23968],
      [20865.36, 0.0176],
      [20865.52, 0.00075],
      [20865.7, 0.00222],
      [20865.74, 0.012],
      [20865.86, 0.03813],
      [20865.9, 0.00902],
      [20865.91, 0.00465],
      [20865.95, 0.02817],
    ]);

    // setting decimal group to be 1
    result = getFormattedOrders(orders.data, updatedDecimal);

    expect(result.asks).toEqual([
      [20864, 0.33965],
      [20865, 0.5337500000000001],
    ]);
  });
});
