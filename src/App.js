import React from "react";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

//redux (Se usa para el filtrado debido a que es el unico componente sin una relacion directa con los demas, de resto no fue necesario)
import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ToDoList />
    </Provider>
  );
}

export default App;
