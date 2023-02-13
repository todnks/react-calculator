export default function Digits({ digits, onClick }) {
  const handlerOnClick = () => {
    onClick(digits);
  }
  return <button className='digit'
    onClick={handlerOnClick}
  >
    {digits}
  </button>;
}
