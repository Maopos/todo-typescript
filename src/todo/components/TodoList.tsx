/* import { useContext } from "react";
import { TodoContext } from "../context/TodoContext"; */
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

const TodoList = () => {
  // Context
  /* const { TodoState } = useContext(TodoContext);
  const { todos } = TodoState; */

  const { todos } = useTodos();

  return (
    <div>
      <h5>Todo List</h5>
      <ol>
        {todos.map((i) => (
          <TodoItem key={i.id} todo={i} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
