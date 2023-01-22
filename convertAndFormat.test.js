const convertAndFormat = require("./convertAndFormat");

describe("#convertAndFormat", () => {
  test("it is a function", () => {
    expect(typeof convertAndFormat).toBe("function");
  });

  test("converting a string returns invalid message", () => {
    expect(convertAndFormat("tacos")).toEqual("That is not a number.");
  });

  test("converting 15", () => {
    expect(convertAndFormat(15)).toEqual("15");
  });

  test("converting 1234", () => {
    expect(convertAndFormat(1234)).toEqual("1,234");
  });

  test("converting 1000000", () => {
    expect(convertAndFormat(1000000)).toEqual("1,000,000");
  });

  test("converting 9876543210", () => {
    expect(convertAndFormat(9876543210)).toEqual("9,876,543,210");
  });

  test("converting 6", () => {
    expect(convertAndFormat(6)).toEqual("6");
  });

  test("converting -10", () => {
    expect(convertAndFormat(-10)).toEqual("-10");
  });

  test("converting -5678", () => {
    expect(convertAndFormat(-5678)).toEqual("-5,678");
  });

  test("converting 12345.678", () => {
    expect(convertAndFormat(12345.678)).toEqual("12,345.678");
  });

  test("converting -3141592.65", () => {
    expect(convertAndFormat(-3141592.65)).toEqual("-3,141,592.65");
  });
});
