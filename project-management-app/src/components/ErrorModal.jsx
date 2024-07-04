import { useImperativeHandle, forwardRef, useRef } from "react";
import Button from "./Button";

const ErrorModal = forwardRef(function ErrorModal({}, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      }
    }
  });

  return (
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-stone-600 my-4">Error: Invalid Input.</h2>
      <p className="text-stone-600 mb-4">Please ensure all fields are filled in.</p>
      <form method="dialog" className="mt-4 text-right">
        <Button>Close</Button>
      </form>
    </dialog>
  );

});

export default ErrorModal;
