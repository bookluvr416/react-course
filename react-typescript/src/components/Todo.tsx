import classes from "./Todo.module.css";

const Todo: React.FC<{ text: string, deleteToDo: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.deleteToDo}>{props.text}</li>
  );
}

export default Todo;
