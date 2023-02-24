import { memo } from 'react';

function ResetContainer({ onClick }) {
  return (
    <div className='modifiers'>
      <button className='modifier' onClick={onClick}>AC</button>
    </div>
  );
}
export default memo(ResetContainer);