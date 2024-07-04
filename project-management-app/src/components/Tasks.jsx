import { useState } from "react";

const Tasks = ({ onAddTask, tasks, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const handleAddTask = () => {
    if (enteredTask.trim()) {
      onAddTask(enteredTask);
      setEnteredTask('');
    };
  }

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input type="text" id="task" onChange={handleChange} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button onClick={handleAddTask} className="text-stone-700 hover:text-stone-950">Add Task</button>
      </div>
      <div>
        {tasks.length === 0
          ? <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
          : (
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
              {tasks.map((task) => (
                <li key={task.id} className="flex justify-between my-4">
                  <span>{task.text}</span>
                  <button className="text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(task.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
};

export default Tasks;
