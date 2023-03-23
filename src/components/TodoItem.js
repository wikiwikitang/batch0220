import { useContext } from 'react';
import classNames from 'classnames';
import { TodoContext } from '../context/index';

const TodoItem = ({ todo, index }) => {
  const { setTodos } = useContext(TodoContext);
  const { content, isCompleted } = todo;

  const modTodo = () => {
    setTodos((pre) => {
      return pre.map((preTodo, i) => {
        if (index !== i) {
          return preTodo;
        }
        return { ...preTodo, isCompleted: !preTodo.isCompleted };
      });
    });
  };

  const delTodo = () => {
    setTodos((pre) => {
      return [...pre.slice(0, index), ...pre.slice(index + 1)];
    });
  };

  return (
    <li>
      <span
        onDoubleClick={modTodo}
        className={classNames({
          'is-completed': isCompleted,
          'todo-item-content': true,
        })}
      >
        {content}
      </span>
      <button onClick={delTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
