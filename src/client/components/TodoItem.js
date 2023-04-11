import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { modTodo, delTodo } from '../actions/index';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { content, isCompleted, id } = todo;

  return (
    <li data-testid={id}>
      <span
        onDoubleClick={() => dispatch(modTodo(id))}
        className={classNames({
          'is-completed': isCompleted,
          'todo-item-content': true,
        })}
      >
        {content}
      </span>
      <button onClick={() => dispatch(delTodo(id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
