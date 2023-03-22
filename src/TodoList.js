import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={`${todo.content}-${index}`}
            todo={todo}
            setTodos={setTodos}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
