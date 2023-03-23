import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { modTodo, delTodo } from '../actions/index';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const { content, isCompleted } = todo;

  return (
    <li>
      <span
        onDoubleClick={() => dispatch(modTodo(index))}
        className={classNames({
          'is-completed': isCompleted,
          'todo-item-content': true,
        })}
      >
        {content}
      </span>
      <button onClick={() => dispatch(delTodo(index))}>Delete</button>
    </li>
  );
};

export default TodoItem;
