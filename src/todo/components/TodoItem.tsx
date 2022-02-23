/* import { useContext } from "react";
import { TodoContext } from "../context/TodoContext"; */
import { Todo } from "../interfaces/interfaces";
import useTodos from "../hooks/useTodos";

interface todoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: todoProps) => {
  // toggle
  // const { toggleTodo } = useContext(TodoContext);

  const { toggleTodo } = useTodos();

  return (
    <li
      onDoubleClick={() => toggleTodo(todo.id)}
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      {todo.desc}
    </li>
  );
};

export default TodoItem;
