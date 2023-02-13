export default function ResetContainer({ state }) {
  const resetState = () => {
    state();
  }
  return (
    <div className='modifiers'>
      <button className='modifier' onClick={resetState}>AC</button>
    </div>
  );
}