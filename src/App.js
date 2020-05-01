import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/taskList";
import TaskListContextProvider from "./contexts/taskListsContext";
import Header from "./components/Header";

import "./App.css";
const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
