export default class Operator {
  static MAX_OPERATOR_LENGTH = 1;
  static SYMBOLS = new Map([
    ['+', new Operator((a, b) => a + b)],
    ['-', new Operator((a, b) => a - b)],
    ['X', new Operator((a, b) => a * b)],
    ['/', new Operator((a, b) => Math.floor(a / b))]
  ]);

  constructor(calculator) {
    this.calculator = calculator;
  }

  static get symbols() {
    return [...this.SYMBOLS.keys()];
  }

  static calculate(operator, [a, b]) {
    try {
      const { calculator } = this.SYMBOLS.get(operator);
      return calculator(a, b);
    } catch (error) {
      throw new Error(`${operator}정의 되지 않은 연산자입니다.`);
    }

  }
}