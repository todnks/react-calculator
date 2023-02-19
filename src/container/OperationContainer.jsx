import { Operator, Validator } from '@/domain';
import { CalculatorButton } from '@/components';
const { symbols: SYMBOLS } = Operator;
const { isOverMaxOperatorLength } = Validator();

export default function OperationContainer({ insertOperation, calculatorState, setAnswer }) {
  const handleInsertOperation = (operator) => {
    if (isOverMaxOperatorLength(calculatorState + operator)) {
      insertOperation(operator)
    }
  }
  return (
    <div className='symbols'>
      {SYMBOLS.map((item, key) => {
        return (
          <CalculatorButton
            key={key}
            data={item}
            onClick={handleInsertOperation}
          />)
      })}
      <CalculatorButton
        data="="
        onClick={setAnswer}
      />
    </div>
  );
}
