import { Operator } from './index';

export default class Calculator {
  constructor(operator, calculatorData) {
    this.operator = operator;
    this.calculatorData = calculatorData;
  }
  execute() {
    return Operator.calculate(this.operator, this.calculatorData);
  }
}