import { useContext } from "react";
import Todo from "./Todo";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

// const Todos: React.FC<{ items: TodoModel[]; deleteTodo: (id: string) => void }> = (props) => {
const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <Todo key={item.id} text={item.text} deleteToDo={ctx.removeTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
}

export default Todos;
