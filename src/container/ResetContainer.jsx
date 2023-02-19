export default function ResetContainer({ onclick }) {
  const resetState = () => {
    onclick();
  }
  return (
    <div className='modifiers'>
      <button className='modifier' onClick={resetState}>AC</button>
    </div>
  );
}