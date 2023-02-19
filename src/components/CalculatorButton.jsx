export default function CalculatorContent({ data, onClick }) {
  const handleOnclick = () => {
    onClick(data);
  }
  return (
    <>
      <button
        onClick={handleOnclick}
      >
        {data}
      </button>
    </>
  )
}