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
});
