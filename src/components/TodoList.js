import { useContext } from 'react';
import { TodoContext } from '../context/index';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

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
