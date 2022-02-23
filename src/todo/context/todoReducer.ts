import { TodoState, Todo } from "../interfaces/interfaces";

type TodoAction =
  | { type: "ADDTODO"; payload: Todo }
  | { type: "TOGGLETODO"; payload: { id: string } };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "ADDTODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "TOGGLETODO":
      return {
        ...state,
        todos: state.todos.map(({ ...i }) => {
          if (i.id === action.payload.id) {
            i.completed = !i.completed;
          }
          return i;
        }),
      };

    default:
      return state;
  }
};
