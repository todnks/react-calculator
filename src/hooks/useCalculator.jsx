import { useMemo, useState } from 'react';
import { useCallback } from 'react';
import { Operator, Calculator } from '@/domain';
const { symbols: SYMBOLS } = Operator;
const intialState = '0';
export default function useCalculator() {
  const [calculatorState, setState] = useState(intialState);
  const insertDigits = useCallback((digits) => {
    if (calculatorState === intialState) {
      setState(digits);
      return;
    }
    setState(calculatorState + digits);
    return;
  }, [calculatorState]);

  const insertOperation = useCallback((operator) => {
    if (calculatorState === intialState) {
      return;
    }
    setState(calculatorState + operator);
    return
  }, [calculatorState])

  const setAnswer = useCallback(() => {
    const operator = calculatorState.split('').find((item) => (
      SYMBOLS.includes(item)
    ))
    const [a, b] = calculatorState.split(operator).map((item) => Number(item));
    if (!operator || !a || !b) {
      return;
    }
    const item = new Calculator(
      operator,
      [a, b]
    );
    const result = item.execute();
    setState(String(result));
  })
  const resetstate = () => setState(intialState);
  return useMemo(() => ({
    insertDigits,
    calculatorState,
    resetstate,
    insertOperation,
    setAnswer
  }), [calculatorState])
}