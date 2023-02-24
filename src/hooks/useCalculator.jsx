import { useMemo, useState, useCallback } from 'react';
import { Operator, Calculator } from '@/domain';
const { symbols: SYMBOLS } = Operator;
const { ERRORMSG } = Calculator;
const intialState = '0';
export default function useCalculator() {

  const [calculatorState, setState] = useState(intialState);

  const insertDigits = useCallback((digits) => {
    if (calculatorState === intialState || calculatorState === ERRORMSG) {
      setState(digits);
      return;
    }
    setState(calculatorState + digits);
  }, [calculatorState]);

  const insertOperation = useCallback((operator) => {
    if (calculatorState === intialState || calculatorState === ERRORMSG) {
      return;
    }
    setState(calculatorState + operator);
  }, [calculatorState])

  const setAnswer = useCallback(() => {
    const operator = calculatorState.split('').find((item) => (
      SYMBOLS.includes(item)
    ))
    if (operator === undefined) {
      return;
    }
    const item = new Calculator(
      operator,
      calculatorState.split(operator).map((item) => Number(item))
    );
    const result = item.execute();
    if (result === Infinity) return setState(ERRORMSG);
    setState(String(result));
  })
  const resetState = () => setState(intialState);
  return useMemo(() => ({
    insertDigits,
    calculatorState,
    resetState,
    insertOperation,
    setAnswer
  }), [calculatorState])
}