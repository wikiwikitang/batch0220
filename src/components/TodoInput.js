import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../actions/index';

const TodoInput = () => {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!userInput.trim()) {
      setUserInput('');
      return;
    }

    dispatch(addTodo(userInput));
    setUserInput('');
    inputRef.current.focus();
  };

  const handleOnEnterDown = (e) => {
    //error first
    if (e.key !== 'Enter') {
      return;
    }

    handleAddTodo();
  };

  return (
    <div>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => handleOnEnterDown(e)}
        ref={inputRef}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
