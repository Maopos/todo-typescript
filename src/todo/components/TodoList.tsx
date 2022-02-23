import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Context
  const { TodoState } = useContext(TodoContext);
  const { todos } = TodoState;

  // console.log(todos);

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
