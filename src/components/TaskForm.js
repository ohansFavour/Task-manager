import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../contexts/taskListsContext";

const TaskForm = () => {
  const { addItem, clearItems, editItem, editTask } = useContext(
    TaskListContext
  );
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addItem(text);
      setText("");
    } else {
      editTask(text, editItem.id);
    }
  };

  const clear = (e) => {
    e.preventDefault();
    clearItems();
  };

  useEffect(() => {
    if (editItem) {
      setText(editItem.title);
    } else {
      setText("");
    }
  }, [editItem]);

  return (
    <form className="form">
      <input
        type="text"
        value={text}
        className="text-input"
        onChange={handleChange}
        placeholder="add task"
      />
      <div className="buttons">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn add-task-btn"
        >
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button className="btn clear-btn" onClick={clear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
