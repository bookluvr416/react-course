import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ remainingTime, targetTime, onReset }, ref) {
  const dialogRef = useRef();

  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      }
    };
  });
  
  return createPortal(
    <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
      <h2>You {userLost ? 'lost' : 'won'}!</h2>
      {!userLost && <p>Your score was {score}</p>}
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>{(remainingTime / 1000).toFixed(2)} seconds left.</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal'),
  );
});

export default ResultModal;
