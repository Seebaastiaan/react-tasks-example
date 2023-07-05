import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-800 text-white rounded-md p-4">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500">{task.description}</p>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-400 px-2 py-1 rounded-md mt-4 hover:bg-red-200"
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
