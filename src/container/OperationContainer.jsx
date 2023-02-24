import { Operator, Validator } from '@/domain';
import { CalculatorButton } from '@/components';
import { memo } from 'react';
const { symbols: SYMBOLS } = Operator;
const { isOverMaxOperatorLength } = Validator();

function OperationContainer({ insertOperation, calculatorState, setAnswer }) {
  const handleInsertOperation = (operator) => {
    if (isOverMaxOperatorLength(calculatorState + operator)) {
      insertOperation(operator)
    }
  }
  return (
    <div className='symbols'>
      {SYMBOLS.map((item, key) => (
        <CalculatorButton
          key={key}
          data={item}
          onClick={handleInsertOperation}
        />
      ))}
      <CalculatorButton
        data="="
        onClick={setAnswer}
      />
    </div>
  );
}
export default memo(OperationContainer);