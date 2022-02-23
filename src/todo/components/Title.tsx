import useTodos from "../hooks/useTodos";

const Title = () => {
  const { pending } = useTodos();

  return (
    <div>
      <h3>Todos: {pending.length}</h3>
    </div>
  );
};

export default Title;
