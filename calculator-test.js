describe("calculateMonthlyPayment tests", function () {
  it("should calculate the monthly rate correctly", function () {
    expect(
      calculateMonthlyPayment({ amount: 5000, years: 12, rate: 5 })
    ).toEqual("46.24");
    expect(
      calculateMonthlyPayment({ amount: 4000, years: 5, rate: 6 })
    ).toEqual("77.33");
    expect(
      calculateMonthlyPayment({ amount: 25000, years: 10, rate: 5 })
    ).toEqual("265.16");
  });
});

describe("2 decimal places tests", function () {
  it("should return a result with 2 decimal places", function () {
    expect(
      calculateMonthlyPayment({ amount: 15000, years: 10, rate: 5 })
    ).toEqual("159.10");
    expect(
      calculateMonthlyPayment({ amount: 2500, years: 5, rate: 9 })
    ).toEqual("51.90");
  });
});
