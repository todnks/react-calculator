import { Digits } from "@/components";

export default function DigitsContainer() {
  const DIGITS = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  return (
    <div className='digits'>
      {DIGITS.map((data) => {
        return (<Digits
          key={data}
          digits={data}
        />);
      })}
    </div>
  );
}
