const { getCurrency } = require("./index"); // import the function from your file

test("getCurrency returns correct currency for a country", () => {
  const result = getCurrency("United States");
  expect(result).toBe("USD"); // assuming 'USD' is the correct currency for 'United States'
});

test("getCurrency returns undefined for a country not in the data", () => {
  const result = getCurrency("Nonexistent Country");
  expect(result).toBeUndefined();
});
