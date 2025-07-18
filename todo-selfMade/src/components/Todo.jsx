import React from "react";
import { useTodo } from "../../../todo/src/contexts/todoContext";

function Todo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo });
    setTodo("");
  };

  return (
    <form onSubmit={add}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit"></button>
    </form>
  );
}

export default Todo;
