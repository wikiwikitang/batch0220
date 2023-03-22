import { useState } from 'react';

const TodoInput = ({ setTodos }) => {
  const [userInput, setUserInput] = useState('');
  const addTodo = () => {
    if (!userInput.trim()) {
      setUserInput('');
      return;
    }

    setTodos((pre) => {
      return [...pre, { content: userInput, isCompleted: false }];
    });
    setUserInput('');
  };

  return (
    <div>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
