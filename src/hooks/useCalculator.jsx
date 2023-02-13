import { useMemo, useState } from 'react';
import { useCallback } from 'react';

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
  const resetstate = () => setState(intialState);
  return useMemo(() => ({
    insertDigits,
    calculatorState,
    resetstate,
    insertOperation
  }), [calculatorState])
}