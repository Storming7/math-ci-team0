import { describe, it, expect } from "vitest";
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from "./math";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe("subtract", () => {
  it("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    expect(multiply(7, 3)).toBe(21);
  });

  it("returns zero when multiplied by zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe("divide", () => {
  it("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("returns zero when multiplied by zero", () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe("factorial", () => {
  it("computes factorial of 5", () => {
    expect(factorial(5)).toBe(120);
  });

  it("returns 1 for factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("returns null for negative input", () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe("power]", () => {
  it("powers two numbers", () => {
    expect(power(4, 2)).toBe(16);
  });

  it("power to zero returns 1", () => {
    expect(power(10, 0)).toBe(1);
  });
});

describe("average", () => {
  it("averages three numbers", () => {
    expect(average([2, 3, 4])).toBe(3);
  });

  it("returns null for empty arrary", () => {
    expect(average([])).toBeNull();
  });
});

describe("clamp", () => {
  it("returns min because value is out of range", () => {
    expect(clamp(1, 5, 100)).toBe(5);
  });

  it("returns value while in range", () => {
    expect(clamp(1, 0, 100)).toBe(1);
  });
});

describe("quad", () => {
  it("returns quadratic answer", () => {
    expect(quadratic(-100, -10, 1)).toEqual([
      -0.16180339887498948, 0.06180339887498949,
    ]);
  });

  it("returns null if discriment is negative", () => {
    expect(quadratic(1, 0, 100)).toBeNull();
  });

  it("returns null if c is 0", () => {
    expect(quadratic(1, 0, 0)).toBeNull();
  });
});
