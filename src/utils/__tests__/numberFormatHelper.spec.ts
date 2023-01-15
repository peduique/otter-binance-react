import { getFormattedNumber } from "../numberFormatHelper";

const rawValue = 24532.35;
const formattedValue = "24,532.35";

describe("numberFormatHelper", () => {
  it("should return formatted number", () => {
    const value = getFormattedNumber(rawValue);

    expect(value).toBe(formattedValue);
  });
});
