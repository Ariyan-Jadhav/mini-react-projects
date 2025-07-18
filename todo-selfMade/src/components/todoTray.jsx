import React, { useState } from "react";
import { useTodo } from "../contexts/todoContext.js";

function TodoTray({ todo }) {
  const [newTodo, setNewTodo] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: newTodo });
    setIsTodoEditable(false);
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleCompleted(todo.id)}
        />
        <input
          type="text"
          readOnly={!isTodoEditable}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          if (todo.isCompleted) return;
          isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev);
        }}
      >
        {isTodoEditable ? "save" : "edit"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </>
  );
}
export default TodoTray;
