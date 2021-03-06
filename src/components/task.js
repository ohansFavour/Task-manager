import React, { useContext } from "react";
import { TaskListContext } from "../contexts/taskListsContext";
const Task = ({ task }) => {
  const { removeItem, findItem } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeItem(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
