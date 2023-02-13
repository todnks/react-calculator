import { Operator, Validator } from '@/domain';
import { Operation } from '@/components';
const { symbols: SYMBOLS } = Operator;
const { isOverMaxOperatorLength } = Validator;

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
          <Operation
            key={key}
            symbols={item}
            onClick={handleInsertOperation}
          />)
      })}
      <Operation
        symbols="="
        onClick={setAnswer}
      />
    </div>
  );
}