import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

// const NewTodo: React.FC<{ onAddTodo: (enteredText: string) => void }> = (props) => {
const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if(enteredText.trim().length === 0) {
      // error
      return;
    }

    ctx.addTodo(enteredText);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
