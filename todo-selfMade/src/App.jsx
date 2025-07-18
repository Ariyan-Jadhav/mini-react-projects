import { useState, useEffect } from "react";
import { TodoProvider } from "../../todo/src/contexts/todoContext.js";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((e) => (e.id === id ? todo : e));
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
    );
  };

  return (
    <TodoProvider
      value={(todos, addTodo, updateTodo, deleteTodo, toggleCompleted)}
    ></TodoProvider>
  );
}

export default App;
