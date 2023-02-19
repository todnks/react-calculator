import { DigitsContainer, OperationContainer, ResetContainer } from '@/container';
import { CalculatorTitle } from '@/components';
import useCalculator from '@/hooks/useCalculator';
function App() {
  const {
    insertDigits,
    calculatorState,
    resetstate,
    insertOperation,
    setAnswer
  } = useCalculator();
  return (
    <div className='App'>
      <div className='calculator'>
        <CalculatorTitle state={calculatorState} />
        <ResetContainer onclick={resetstate} />
        <DigitsContainer
          insertDigits={insertDigits}
          calculatorState={calculatorState}
        />
        <OperationContainer
          insertOperation={insertOperation}
          calculatorState={calculatorState}
          setAnswer={setAnswer}
        />
      </div>
    </div>
  );
}

export default App;
