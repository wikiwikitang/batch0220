const TodoItem = ({ todo, setTodos, index }) => {
  const { content, isCompleted } = todo;

  return (
    <li>
      <span
        onDoubleClick={() => {
          setTodos((pre) => {
            return pre.map((preTodo, i) => {
              if (index !== i) {
                return preTodo;
              }
              return { ...preTodo, isCompleted: !preTodo.isCompleted };
            });
          });
        }}
        className={isCompleted ? 'is-completed' : 'regular'}
      >
        {content}
      </span>
      <button
        onClick={() =>
          setTodos((pre) => {
            return [...pre.slice(0, index), ...pre.slice(index + 1)];
          })
        }
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
