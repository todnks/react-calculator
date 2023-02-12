import { Operator } from '@/domain';
import { Operation } from '@/components';
const { symbols: SYMBOLS } = Operator;

export default function OperationContainer() {
  const handleInsertOperation = (operator) => {

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
      />
    </div>
  );
}