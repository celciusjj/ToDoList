import React from 'react';
import ToDoList from "./components/ToDoList"
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <ToDoList />
    </div>
  );
}

export default App;
