import { Operator } from './index';

export default class Calculator {
  ERRORMSG = "오류";
  static MAX_DIGITS_LENGTH = 3;
  constructor(operator, calculatorData) {
    this.operator = operator;
    this.calculatorData = calculatorData;
  }
  execute() {
    return Operator.calculate(this.operator, this.calculatorData);
  }
}