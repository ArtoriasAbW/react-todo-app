import React from "react";

import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter/index";
import SearhPanel from "../search-panel";
import TodoList from "../todo-list/index";
import "./app.css";

const App = () => {
  const todoData = [
    {
      label: "Drink Coffee",
      important: false,
      id: 1,
    },
    {
      label: "Make Awesome App",
      important: true,
      id: 2,
    },
    {
      label: "Sleep",
      important: true,
      id: 3,
    },
  ];
  return (
    <div>
      <AppHeader />
      <ItemStatusFilter />
      <SearhPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
