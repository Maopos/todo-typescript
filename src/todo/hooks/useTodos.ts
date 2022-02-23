import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const useTodos = () => {
  const { TodoState, toggleTodo } = useContext(TodoContext);
  const { todos } = TodoState;

  return {
    todos,
    pending: todos.filter((i) => i.completed === false),
    toggleTodo,
  };
};

export default useTodos;
