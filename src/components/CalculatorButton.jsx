export default function CalculatorButton({ data, onClick }) {
  const handleClick = () => {
    onClick(data);
  }
  return (
    <>
      <button
        onClick={handleClick}
      >
        {data}
      </button>
    </>
  )
}