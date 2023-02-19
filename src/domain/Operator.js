export default class Operator {
  static MAX_OPERATOR_LENGTH = 1;
  static SYMBOLS = new Map([
    ['+', new Operator('+', (a, b) => a + b)],
    ['-', new Operator('-', (a, b) => a - b)],
    ['X', new Operator('X', (a, b) => a * b)],
    ['/', new Operator('/', (a, b) => Math.round(a / b))]]);

  constructor(operator, calculator) {
    this.operator = operator;
    this.calculator = calculator;
  }

  static get symbols() {
    return [...this.SYMBOLS.keys()];
  }

  static calculate(operator, [a, b]) {
    const { calculator } = this.SYMBOLS.get(operator);
    return calculator(a, b);
  }
}