const unused = 42;

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number | null {
  if (b === 0) return null;
  return a / b;
}

export function factorial(n: number): number | null {
  if (n < 0 || !Number.isInteger(n)) return null;
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function power(base: number, exponent: number): number {
  if (exponent === 0) return 1;
  return base ** exponent;
}

let currentNumber = 0;
export function average(numbers: Array<number>): number | null {
  if (numbers.length === 0) {
    return null;
  }
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    currentNumber += numbers[i];
  }
  return currentNumber / numbers.length;
}

export function clamp(value: number, min: number, max: number): number | null {
  if (typeof value !== "number") {
    return null;
  }
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  }
  return value;
}

export function quadratic(
  a: number,
  b: number,
  c: number,
): Array<number> | null {
  if (c === 0) {
    return null;
  }

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return null;
  }

  const quadPos = (-b + Math.sqrt(discriminant)) / (2 * a);
  const quadNeg = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [quadPos, quadNeg];
}
