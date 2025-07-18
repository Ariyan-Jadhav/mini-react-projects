import React, { useState } from "react";
import { useTodo } from "../contexts/todoContext";

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
        placeholder="Type here"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Todo;
