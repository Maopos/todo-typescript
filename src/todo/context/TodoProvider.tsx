import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const initialState: TodoState = {
  todoCount: 2,
  todos: [
    { id: "1", desc: "Aprender Typescript", completed: false },
    { id: "2", desc: "Aprender React", completed: true },
  ],
  completed: 0,
  pending: 2,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  // useReducer
  const [TodoState, dispatch] = useReducer(todoReducer, initialState);

  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLETODO", payload: { id: id } });
  };

  return (
    <TodoContext.Provider value={{ TodoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
