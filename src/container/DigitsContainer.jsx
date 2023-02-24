import { CalculatorButton } from "@/components";
import { Validator } from '@/domain';
import { memo } from 'react';

const DIGITS = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
const { isOverMaxDigitsLength } = Validator();

function DigitsContainer({ insertDigits, calculatorState }) {

  const handleInsertDigits = (digits) => {
    if (isOverMaxDigitsLength(calculatorState + digits)) {
      insertDigits(digits);
    }
  }

  return (
    <div className='digits'>
      {DIGITS.map((data) => (
        <CalculatorButton
          key={data}
          data={data}
          onClick={handleInsertDigits}
        />)
      )}
    </div>
  );
}
export default memo(DigitsContainer);