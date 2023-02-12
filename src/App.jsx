import { DigitsContainer, OperationContainer, ResetContainer } from '@/container';
import { CalculatorTitle } from '@/components';
function App() {
  return (
    <div className='App'>
      <div className='calculator'>
        <CalculatorTitle />
        <ResetContainer />
        <DigitsContainer />
        <OperationContainer />
      </div>
    </div>
  );
}

export default App;
