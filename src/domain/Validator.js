import { Operator, Calculator } from './index'
const { symbols: SYMBOLS, MAX_OPERATOR_LENGTH } = Operator;
const { MAX_DIGITS_LENGTH } = Calculator;

export default function Validator() {

  const isOverMaxDigitsLength = (text) => {

    const operator = text.split('').find((item) => (
      SYMBOLS.includes(item)
    ));

    if (operator) {
      return text.split(operator).every((item) => (
        item.length <= MAX_DIGITS_LENGTH && item.length > 0
      ))
    };

    if (text.length <= MAX_DIGITS_LENGTH) return true;

  };

  const isOverMaxOperatorLength = (text) => {

    const operator = text.split('').filter((item) => (
      SYMBOLS.includes(item)
    ))

    if (operator.length <= MAX_OPERATOR_LENGTH) {
      return true;
    }

  }
  return {
    isOverMaxDigitsLength,
    isOverMaxOperatorLength
  }
}
