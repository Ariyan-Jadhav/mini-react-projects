import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Task",
      isCompleted: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleCompleted: () => {},
});

export const UseTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
