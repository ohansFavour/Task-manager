import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTask] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  const addItem = (title) => {
    setTask([...tasks, { title, id: uuidv4() }]);
  };
  const removeItem = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const clearItems = () => {
    setTask([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTask(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addItem,
        removeItem,
        clearItems,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
