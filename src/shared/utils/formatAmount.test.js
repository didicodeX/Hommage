import { formatAmount } from "./formatAmount";

describe("formatAmount", () => {
  it("formate correcrement un montent en cents", () => {
    expect(formatAmount(500)).toBe("$5.00");
    expect(formatAmount(1234)).toBe("$12.34");
  })
  it.only("arrondit a 2 decimales", () => {
    expect(formatAmount(199)).toBe("$1.99")
  })
})