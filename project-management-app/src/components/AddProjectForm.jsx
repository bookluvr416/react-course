import { useRef } from "react";
import Input from './Input';
import ErrorModal from './ErrorModal';

const AddProjectForm = ({ onSave, onCancel }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const dialogRef = useRef();

  const handleSaveClick = () => {
    const titleVal = titleRef.current.value.trim();
    const descriptionVal = descriptionRef.current.value.trim();
    const dueDateVal = dueDateRef.current.value.trim();

    if (titleVal && descriptionVal && dueDateVal) {
      onSave(titleVal, descriptionVal, dueDateVal);
    } else {
      dialogRef.current.open();
    }
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
        <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 " onClick={handleSaveClick}>Save</button></li>
      </menu>

      <Input
        id="title"
        label="Title"
        ref={titleRef}
        type="text"
      />
      <Input
        id="description"
        label="Description"
        isTextArea
        ref={descriptionRef}
      />
      <Input
        id="due-date"
        label="Due Date"
        ref={dueDateRef}
        type="date"
      />
      <ErrorModal ref={dialogRef} />
    </div>
  )
};

export default AddProjectForm;
