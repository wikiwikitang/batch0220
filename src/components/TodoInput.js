import { useState, useContext, useRef } from 'react';
import { TodoContext } from '../context/index';

const TodoInput = () => {
  const [userInput, setUserInput] = useState('');
  const { setTodos } = useContext(TodoContext);
  const inputRef = useRef(null);

  const addTodo = () => {
    if (!userInput.trim()) {
      setUserInput('');
      return;
    }

    setTodos((pre) => {
      return [...pre, { content: userInput, isCompleted: false }];
    });
    setUserInput('');
    inputRef.current.focus();
  };

  const handleOnEnterDown = (e) => {
    //error first
    if (e.key !== 'Enter') {
      return;
    }

    addTodo();
  };

  return (
    <div>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => handleOnEnterDown(e)}
        ref={inputRef}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
