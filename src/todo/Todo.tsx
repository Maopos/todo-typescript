import TodoProvider from "./context/TodoProvider";
import TodoList from "./components/TodoList";

const Todo = () => {
  return (
    <TodoProvider>
      <h3>Todo App</h3>
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
