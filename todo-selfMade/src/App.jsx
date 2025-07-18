import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/todoContext.js";
import Todo from "./components/Todo.jsx";
import TodoTray from "./components/todoTray.jsx";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((e) => (e.id === id ? { ...e, ...todo } : e)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isCompleted: !e.isCompleted } : e))
    );
  };

  useEffect(() => {
    const summonTodos = JSON.parse(localStorage.getItem("todos"));
    if (summonTodos && summonTodos.length > 0) setTodos(summonTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <Todo />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoTray todo={todo} />
          </div>
        );
      })}
    </TodoProvider>
  );
}

export default App;
