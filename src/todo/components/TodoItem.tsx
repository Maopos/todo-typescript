import { Todo } from "../interfaces/interfaces";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

interface todoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: todoProps) => {
  // toggle
  const { toggleTodo } = useContext(TodoContext);

  // handleDbClick
  const handleDbClick = () => {
    toggleTodo(todo.id);
    // console.log(todo.desc);
  };

  return (
    <li
      onDoubleClick={handleDbClick}
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
