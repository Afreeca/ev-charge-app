import { areObjectsEqual } from "../../helpers/compare";

describe("compare", () => {
  const obj1 = { one: "1", two: "2" };
  const obj2 = { one: "1", two: "2" };
  const obj2DiffKeys = { one: "1", two: "2", three: "3" };
  const obj1Diff = { one: "1", two: "two" };
  const nonObject = 5;

  const cases = [
    [true, "objects are equal", [obj1, obj2]],
    [false, "objects are not equal", [obj1Diff, obj2]],
    [true, "objects are the same", [obj1, obj1]],
    [false, "one of objects is not an object", [obj1, nonObject]],
    [false, "objects keys number are different", [obj1, obj2DiffKeys]],
    [false, "one of objects is null", [obj1, null]],
    [false, "one of objects is undefined", [obj1, undefined]],
  ];

  it.each(cases)("should return %s if %s", (result, _, params) => {
    const res = areObjectsEqual(params[0], params[1]);
    expect(res).toBe(result);
  });
});
