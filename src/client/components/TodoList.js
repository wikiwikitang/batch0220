import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={`${todo.content}-${index}`}
            todo={todo}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
