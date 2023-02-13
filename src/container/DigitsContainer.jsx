import { Digits } from "@/components";
import { Calculator, Validator } from '@/domain';

const { MAX_DIGITS_LENGTH } = Calculator;
const { isOverMaxDigitsLength } = Validator;
export default function DigitsContainer({ insertDigits, calculatorState }) {
  const DIGITS = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  const handleInsertDigits = (digits) => {
    if (isOverMaxDigitsLength(calculatorState + digits)) {
      insertDigits(digits);
    }
  }
  return (
    <div className='digits'>
      {DIGITS.map((data) => {
        return (<Digits
          key={data}
          digits={data}
          onClick={handleInsertDigits}
        />);
      })}
    </div>
  );
}
